const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader?sourceMap"
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ];
  }
};
