/**
 *
 * Production config
 * Change filename
 * Inititate linting
 *
 **/

module.exports = () => ({
  output: {
    filename: "App.min.js"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: "/node_modules/",
        loader: "eslint-loader",
        options: {
          failOnError: true,
          quiet: true
        }
      }
    ]
  }
});
