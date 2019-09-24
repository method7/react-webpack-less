const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.(css||less||scss)$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    filename: "index.js",
    publicPath: "/"
  },
  devServer: { historyApiFallback: true },
  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};
