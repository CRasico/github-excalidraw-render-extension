await Bun.build({
  entrypoints: ["./src/background.ts", "./src/content-script.ts"],
  outdir: "dist",
  sourcemap: "inline"
});
