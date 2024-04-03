import { shallowEqual, useSelector } from "react-redux";
import { ExcalidrawWrapper } from "./components/ExcalidrawWrapper";
import store from "./store";
import { reloadContent, removeContent } from "./features/content";

export function App() {
  const content = useSelector(
    (state: any) => state.content.value,
    shallowEqual,
  );

  onstorage = () => {
    store.dispatch(removeContent());
    setTimeout(() => {
      store.dispatch(reloadContent());
    }, 500);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Github Excalidraw Viewer</h1>
      {content.type === "excalidraw" ? (
        <ExcalidrawWrapper key={content} content={content} />
      ) : (
        <div style={{ textAlign: "center" }}>
          <p>Nothing store please re-extract before reloading</p>
        </div>
      )}
    </>
  );
}
