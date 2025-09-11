import esbuild from "esbuild";

const banner =
`/* dashboard-launcher (c) 2025
   Build time: ${new Date().toISOString()} */`;

const isWatch = process.argv.includes("--watch");

const buildOptions = {
  entryPoints: ["main.ts"],
  bundle: true,
  outfile: "main.js",
  external: ["obsidian"],
  format: "cjs",
  target: "es2020",
  banner: { js: banner },
  sourcemap: "inline"
};

async function run() {
  try {
    if (isWatch) {
      const ctx = await esbuild.context(buildOptions);
      await ctx.watch();
      console.log("Watching for changes... (Strg+C zum Beenden)");
    } else {
      await esbuild.build(buildOptions);
      console.log("Build complete.");
    }
  } catch (e) {
    console.error("Build failed:", e);
    process.exit(1);
  }
}

run();