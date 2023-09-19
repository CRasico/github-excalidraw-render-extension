import { exportToSvg, loadFromBlob } from "@excalidraw/excalidraw";

async function getExcalidrawContent(): Promise<void> {
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

excalidraw();
