const path = require("path");
// path는 경로 조작용 빌트인 모듈이다.
// path.join은 경로를 알아서 합쳐 주는 것이고, __dirname은 현재 폴더를 의미한다.
// path.join(__dirname, "dist")는 현재 폴더 안에 있는 "dist" 폴더까지의 경로를 나타낸다.
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  name: "word-relay-setting",
  mode: "development",
  // 실제 서비스에서는 mode: production
  devtool: "eval",
  resolve: {
    // entry.app의 배열에 있는 파일명 중에서, 확장자가 .js나 .jsx에 해당하는 것이 있는지를 알아서 체크해 준다.
    extensions: [".js", ".jsx"],
  },
  /////////////////// 중요 ///////////////////
  // entry: 입력(여기서는 client.jsx, WordReplay.jsx) => 해당 컴포넌트들을 경로와 함께 배열로 입력하면 된다.
  // 추가적으로, 웹팩이 알아서 import까지 파악해서 합쳐 준다.
  // 여기서는 client.jsx가 WordReplay.jsx를 import하고 있는데, 이를 웹팩이 파악하여 합쳐 주기 때문에 app 배열에 ["./client.jsx", "./WordRelay.jsx"]가 아니라 ["./client.jsx"]만 전달해도 된다.
  // module: 모듈 적용
  //// rules: 적용될 규칙(여기서는 정규표현식에 따라 js나 jsx 파일에 babel-loader를 적용하겠다는 뜻 => 즉, js, jsx 파일에 문법을 호환시켜주겠다)
  ////// test: 적용될 규칙의 패턴, 정규표현식에 따라 골라서 적용함
  ////// loader: 적용시킬 모듈
  ////// options: 옵션
  //////// presets: 적용될 프리셋
  // output: 출력(여기서는 app.js)
  entry: {
    app: ["./client"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["last 2 chrome versions"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new RefreshWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  },
  devServer: {
    devMiddleware: { publicPath: "/dist/" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
// 이렇게 설정을 완료한 뒤 webpack을 실행시키면 알아서 entry 안의 app들을 합쳐 output해 준다.
