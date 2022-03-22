const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  //入口
  entry: {
    main: "./src/index.js",
    // sub: "./src/index.js",
  },
  devServer: {
    static: "./dist",
    proxy: {
      // "/api/ceshi": {
      //   target: "http://localhost:5000",
      //   pathRewrite: {
      //     "^/api": "",
      //   },
      //   changeOrigin: true,
      // },
      "/index": {
        target: "http://v.juhe.cn/toutiao",
        changeOrigin: true,
      },
    },
  },
  output: {
    // 打包的js在html中引入的时候加上前缀
    // publicPath: "http://www.baidu.com",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html", cache: false }),
    new CleanWebpackPlugin(),
  ],
};
