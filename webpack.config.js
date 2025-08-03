const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: isProd ? "/football-test/" : "/",
    clean: true,
  },

  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      vue: "@vue/runtime-dom",
    },
  },

  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      { test: /\.(png|jpe?g|gif|svg)$/i, type: "asset/resource" },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Vue App",
    }),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 8080,
    hot: true,
    open: true,
  },

  mode: isProd ? "production" : "development",
};
