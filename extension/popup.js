document.getElementById("detectBtn").addEventListener("click", () => {
  document.getElementById("status").textContent = "Capturing...";

  chrome.runtime.sendMessage({ action: "triggerCapture" }, (response) => {
    if (response.success) {
      const imageData = response.image;

      fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageData }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.label === "Real") {
            alert(`✅ Real face detected.\nConfidence: ${data.confidence}%`);
            document.getElementById("status").textContent = "Real Face";
          } else if (data.label === "Deepfake") {
            alert(`⚠️ Deepfake detected!\nConfidence: ${data.confidence}%`);
            document.getElementById("status").textContent = "Deepfake Detected";
          } else {
            alert(`⚡ Uncertain result.\nConfidence: ${data.confidence}%`);
            document.getElementById("status").textContent = "Uncertain";
          }
        })
        .catch((err) => {
          console.error("Error contacting backend:", err);
          alert("❌ Error contacting backend");
          document.getElementById("status").textContent = "Error";
        });
    } else {
      alert("No video detected.");
      document.getElementById("status").textContent = "Idle";
    }
  });
});
