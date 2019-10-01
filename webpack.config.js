const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

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
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/offline.html",
      filename: "./offline.html"
    }),
    new WebpackPwaManifest({
      name: "Find A Picture",
      short_name: "FAP",
      description:
        "Find picture on Unsplash, Pixabay and more in the same place !",
      icons: [
        {
          src: "src/assets/logo512.png",
          sizes: [96, 128, 192, 256, 384, 512],
          type: "image/png"
        }
      ],
      start_url: "/index.html",
      display: "standalone",
      background_color: "#121212",
      orientation: "portrait-primary",
      fingerprints: true,
      inject: true
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: "service-worker.js",
      clientsClaim: true,
      skipWaiting: true
    }),
    require("autoprefixer")
  ]
};
