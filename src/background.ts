/// <reference lib="dom" />
import { exportToSvg, loadFromBlob } from "@excalidraw/excalidraw";

async function excalidraw(): Promise<void> {
  var element = document.getElementById("read-only-cursor-text-area");
  if (element == undefined) {
    return;
  }

  const content = JSON.parse(element.innerHTML);
  const bytes = new TextEncoder().encode(content);
  const blob = new Blob([bytes], { type: "appliation/json;charset=utf-8" });
  const scene = await loadFromBlob(blob, null, null);
  var svg = await exportToSvg(scene);
  element?.parentNode?.replaceChild(svg, element);
}

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
    func: excalidraw,
  });
});
