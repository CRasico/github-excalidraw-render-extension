import { Excalidraw } from "@excalidraw/excalidraw";

export function ExcalidrawWrapper(props: { content: any }) {
  return (
    <>
      <div style={{ height: "90vh" }}>
        <Excalidraw initialData={props.content} />
      </div>
    </>
  );
}
