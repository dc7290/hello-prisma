const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  node: {
    __dirname: false,
  },
  output: {
    filename: "index.js",
    path: path.join(__dirname, "src"),
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }],
  },
  plugins: [new NodemonPlugin()],
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  externals: [nodeExternals()],
};
