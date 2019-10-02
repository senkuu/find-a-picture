const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: {
          loader: "css-loader"
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/offline.html",
      filename: "./offline.html"
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: "./src/service-worker.js",
      swDest: "./service-worker.js"
    }),
    new CopyWebpackPlugin([
      { from: "src/images", to: "images/" },
      "src/manifest.json"
    ]),
    require("autoprefixer")
  ]
};
