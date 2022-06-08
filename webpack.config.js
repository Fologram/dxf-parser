import { resolve } from "path";
const ASSET_PATH = process.env.ASSET_PATH || "/";

export default {
  entry: "./esm/index.js",
  output: {
    filename: "index.js",
    path: resolve(ASSET_PATH, "commonjs"),
    library: {
      name: "DxfParser",
      type: "umd",
      export: "DxfParser",
    },
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
};
