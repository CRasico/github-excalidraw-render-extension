/// <reference lib="dom" />

chrome.action.onClicked.addListener((tab: chrome.tabs.Tab) => {
  if (tab == undefined) {
    console.warn("Could not find an active tab");
    return;
  }
  var url = tab.url;
  if (url == undefined || !url.includes(".excalidraw")) {
    return;
  }
  console.log("Executing script on possible excalidraw file");

  chrome.scripting.executeScript({
    target: { tabId: tab.id ? tab.id : -1 },
    files: ["content-script.js"],
  });
});
