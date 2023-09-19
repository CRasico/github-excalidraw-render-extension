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

  console.log("Attempting to capture Excalidraw file");
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id ? tab.id : -1 },
      files: ["github-content-script.js"],
    })
    .then((onfulfilled) => {
      if (onfulfilled.length == 0) {
        console.log(
          "No file found, please try another folder in the repository"
        );
        return;
      }

      var result = onfulfilled[0].result;
      console.log("Located Excalidraw File", result);
    });
});
