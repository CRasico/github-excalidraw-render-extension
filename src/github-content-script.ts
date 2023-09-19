async function getExcalidrawContent(): Promise<string | null> {
  var element = document.getElementById("read-only-cursor-text-area");
  if (element == undefined) {
    return null;
  }

  const content = JSON.parse(element.innerHTML);
  return content;
}

getExcalidrawContent();
