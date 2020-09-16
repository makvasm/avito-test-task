let config = {
  entry: {
    index: __dirname + "/src/App.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/src/public/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: __dirname + "/src/public/",
    port: 3000,
    open: true
  }
}

module.exports = (env, argv) => {
  argv.prod ? config.mode = "production" : config.mode = "development"
  return config
}