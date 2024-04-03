import { Excalidraw } from "@excalidraw/excalidraw";

export function ExcalidrawWrapper(props: { content: any }) {
  return (
    <>
      <div style={{ height: "600px" }}>
        <Excalidraw initialData={props.content} />
      </div>
    </>
  );
}
