module.exports = {
  "input": "./index.js",
  "outDir": "./public/js",
  "format": "umd-min",
  plugin: [require('rollup-plugin-postcss')()]
}
