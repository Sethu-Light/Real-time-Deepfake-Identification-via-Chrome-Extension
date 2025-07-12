chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "captureFrame") {
    const video = document.querySelector("video");

    if (video) {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = canvas.toDataURL("image/jpeg");
      sendResponse({ success: true, image: imageData });
    } else {
      sendResponse({ success: false, error: "No video found" });
    }
  }

  return true; // Keep message channel open
});
