import HtmlWebPackPlugin from "html-webpack-plugin";

export const module = {
  rules: [
    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader"
        }
      ]
    },
    {
      enforce: "pre",
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }
  ]
};
export const resolve = {
  extensions: [".jsx", ".js", ".json"]
};
export const plugins = [
  new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
  })
];
