await Bun.build({
  entrypoints: ["./src/background.ts", "./src/excalidraw-content.ts"],
  outdir: "dist",
});
