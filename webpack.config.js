const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode }) => {
  return webpackMerge(
    {
      mode,
      output: {
        filename: "App.dev.js"
      },
      devServer: {
        open: true
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/html/index.html", // path to dev index.html
          filename: "./index.html" // name for production build html
        }),
        new webpack.ProgressPlugin()
      ],
      module: {
        rules: [
          {
            test: /\.html$/,
            loader: "html-loader",
            options: {
              minimize: true
            }
          },
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader?sourceMap:", "sass-loader"]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000
                }
              }
            ]
          }
        ]
      }
    },
    modeConfig(mode)
  );
};
