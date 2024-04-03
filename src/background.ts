/// <reference lib="dom" />

var isConnected = false;
var connection: any; // Not sure what type this would be

chrome.runtime.onConnect.addListener(function (devToolsConnection) {
  console.info("Connected to devtools", devToolsConnection);
  connection = devToolsConnection;
  isConnected = true;
});

chrome.action.onClicked.addListener((tab: chrome.tabs.Tab) => {
  if (tab == undefined) {
    console.warn("Could not find an active tab");
    return;
  }
  const url = tab.url;
  console.info("Validating tab url", url);
  if (url == undefined || !url.includes(".excalidraw")) {
    return;
  }

  console.info("Attempting to capture Excalidraw file");
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id ? tab.id : -1 },
      files: ["github-content-script.js"],
    })
    .then((onfulfilled) => {
      if (onfulfilled.length == 0) {
        console.warn(
          "No file found, please try another folder in the repository",
        );
        return;
      }

      const result = onfulfilled[0].result;
      if (isConnected && result) {
        console.info("Sending Content to the DevTools Handler");
        connection.postMessage({
          type: "ExcalidrawContent",
          content: result,
        });
      }
    });
});
