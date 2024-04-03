import { shallowEqual, useSelector } from "react-redux";
import { ExcalidrawWrapper } from "./components/ExcalidrawWrapper";
import store from "./store";
import { reloadContent, removeContent } from "./features/content";

export function App() {
  const content = useSelector(
    (state: any) => state.content.value,
    shallowEqual,
  );
  const handleReloadClick = () => store.dispatch(reloadContent());
  const handleRemoveClick = () => store.dispatch(removeContent());

  return (
    <>
      <button onClick={handleReloadClick}>Reload</button>
      <button onClick={handleRemoveClick}>Remove</button>
      <h1 style={{ textAlign: "center" }}>Github Excalidraw Viewer</h1>
      {content.type === "excalidraw" ? (
        <ExcalidrawWrapper content={content} />
      ) : (
        <h2>Nothing Stored</h2>
      )}
    </>
  );
}
