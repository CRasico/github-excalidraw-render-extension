await Bun.build({
  entrypoints: ["./src/background.ts", "./src/github-content-script.ts"],
  outdir: "dist",
});
