/// <reference lib="dom" />
function makeOrange(): void {
  document.body.style.background = "orange";
}

chrome.action.onClicked.addListener((tab: chrome.tabs.Tab) => {
  if (tab == undefined) {
    return;
  }
  var url = tab.url;
  if (url == undefined || !url.includes(".excalidraw") == false) {
    return;
  }
  console.log("we are on a possible excalidraw file");

  chrome.scripting.executeScript({
    target: { tabId: tab.id ? tab.id : -1 },
    func: makeOrange,
  });
});
