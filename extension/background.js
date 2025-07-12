chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "triggerCapture") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "captureFrame" }, (response) => {
        sendResponse(response);
      });
    });
    return true; // Keep the message channel open for sendResponse
  }
});
