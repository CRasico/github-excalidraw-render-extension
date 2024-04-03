await Bun.build({
  entrypoints: [
    "./src/background.ts",
    "./src/github-content-script.ts",
    "./src/devtools.ts",
    "./src/panel.tsx",
  ],
  outdir: "dist",
});
