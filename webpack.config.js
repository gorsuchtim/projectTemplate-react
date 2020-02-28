const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      output: {
        filename: "App.js"
      },
      devtool: "source-map",
      devServer: {
        open: true
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/html/index.html",
          filename: "./index.html"
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
          filename: "shared.css"
        })
      ]
    },
    modeConfig(mode)
  );
};
