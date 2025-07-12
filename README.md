# Real-time-Deepfake-Identification-via-Chrome-Extension
The "Real-Time Deepfake Identification Chrome Extension" employs an EfficientNet deep learning model for rapid deepfake detection. It takes video frames from browser windows, processes them locally via Flask, and provides real-time confidence feedback—all while keeping privacy intact without any cloud services.


# Real-Time Deepfake Identification Chrome Extension

This project is a **real-time deepfake detection Chrome extension** that leverages a pre-trained deep learning model based on **EfficientNet** to analyze video frames and determine whether they are real or synthetically generated (deepfakes). It is built with privacy and speed in mind—processing is done entirely on the local machine using a Flask backend.

---

## 🔍 Features

- 🧠 Deepfake detection using EfficientNet-based model
- 🔐 100% local processing (no cloud dependency)
- 🎥 Real-time video frame capture from browser tabs
- 📊 Confidence-based analysis output
- 🧩 Chrome extension with clean UI
- 🔁 Auto-stop scan after set duration for efficiency

---

## 🗂️ Project Structure

Deepfake-Detector-Extension/
│
├── backend/
│ ├── app.py # Flask backend for inference
│ ├── deepfake_model.h5 # Trained EfficientNet model
│ └── requirements.txt # Backend dependencies
│
├── extension/
│ ├── popup.html # Extension UI
│ ├── popup.js # Logic to capture video and send to backend
│ ├── style.css # Extension styling
│ ├── manifest.json # Chrome extension config
│
└── README.md # Project documentation

yaml
Copy
Edit



## ⚙️ Installation Guide

### 1. Clone the Repository


git clone https://github.com/your-username/deepfake-detector-extension.git
cd deepfake-detector-extension
2. Set Up the Backend
Ensure you have Python 3.9+ installed.

Install dependencies:

bash
Copy
Edit
cd backend
pip install -r requirements.txt
Run the Flask server:

bash
Copy
Edit
python app.py
The backend will run at: http://127.0.0.1:5000/

3. Set Up the Chrome Extension
Open Chrome and go to: chrome://extensions/

Enable Developer Mode (top right)

Click Load unpacked

Select the extension/ folder

🧪 How It Works
User clicks "Scan" button in the Chrome extension.

The extension captures a frame from an active video element.

The frame is converted to base64 and sent to the Flask backend.

The backend resizes and preprocesses the image, then feeds it to the EfficientNet model.

A prediction (Real, Deepfake, or Uncertain) with confidence is returned.

Results are displayed to the user in the popup.

🛠 Requirements
Backend (Python)
Flask

TensorFlow / Keras

NumPy

Pillow

Flask-CORS

Install using:

bash
Copy
Edit
pip install flask flask-cors tensorflow pillow numpy
Chrome Extension
Chrome 92+

Permissions:

tabs

activeTab

videoCapture

🧠 Model Overview
The project uses a pre-trained EfficientNet model fine-tuned for binary classification: Real vs Deepfake. The input size is 128x128x3, and the model outputs a confidence score between 0 and 1.

📝 Future Improvements
Multi-face detection support

Dark background enhancement

Video-level decision aggregation

Cross-browser support (Firefox, Edge)

🧾 License
This project is licensed under the MIT License.

🙌 Acknowledgements
KerasCV EfficientNet

Deepfake Detection Datasets (e.g., FaceForensics++, Deepfake Detection Challenge)

TensorFlow and Flask communities

yaml
Copy
Edit








