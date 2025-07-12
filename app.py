from flask import Flask, request, jsonify
from flask_cors import CORS
from keras.models import load_model
from PIL import Image
import numpy as np
import io
import base64

app = Flask(__name__)
CORS(app)

# Load your deepfake detection model
model = load_model('deepfake_model.h5')

@app.route('/ping', methods=['GET'])
def ping():
    return jsonify({'message': 'Backend is up!'})

@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        data = request.get_json()
        image_data = data['image'].split(",")[1]
        image_bytes = base64.b64decode(image_data)
        img = Image.open(io.BytesIO(image_bytes)).convert('RGB')
        img = img.resize((128, 128))
        img_array = np.array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        prediction = model.predict(img_array)[0][0]
        confidence = float(prediction)

        # Apply smarter thresholds
        if 0.35 <= confidence <= 0.65:
            label = "Uncertain"
        else:
            label = "Deepfake" if confidence > 0.5 else "Real"

        return jsonify({
            'label': label,
            'confidence': round(confidence * 100, 2)
        })

    except Exception as e:
        print("Error during analysis:", e)
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
