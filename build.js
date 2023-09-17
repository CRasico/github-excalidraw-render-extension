await Bun.build({
  entrypoints: ["./src/background.ts"],
  outdir: "dist",
});
