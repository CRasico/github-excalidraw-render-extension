import { useSelector } from "react-redux";
import { ExcalidrawWrapper } from "./components/ExcalidrawWrapper";
import store from "./store";
import { setContent, reloadContent } from "./features/content";

export function refreshContent(content: any) {
  console.log("dispatching content", content);
  store.dispatch(setContent(content));
}

export function App() {
  const content = useSelector((state: any) => state.content.value);
  const handleReloadClick = () => store.dispatch(reloadContent());

  return (
    <>
      <button onClick={handleReloadClick}>Reload Excalidraw</button>
      <h1 style={{ textAlign: "center" }}>Github Excalidraw Viewer</h1>
      <ExcalidrawWrapper content={content} />
    </>
  );
}
