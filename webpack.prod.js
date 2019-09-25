const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "index.js",
    publicPath: "/"
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.min.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      }
    ]
  }
});
