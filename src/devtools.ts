chrome.devtools.panels.create(
  "Excalidraw Renderer",
  "icon.png",
  "panel.html",
  (panel) => {
    console.log(panel);
  },
);

var backgroundPageConnection = chrome.runtime.connect({
  name: "devtools-page",
});

backgroundPageConnection.onMessage.addListener((message: any) => {
  if (message.type !== "ExcalidrawContent") {
    console.log("Unhandled Message");
    return;
  }
  console.log("Setting content in local storage");
  localStorage.setItem(
    "github-excalidraw-content",
    JSON.stringify(message.content),
  );
});

backgroundPageConnection.postMessage({ message: "Connected" });
