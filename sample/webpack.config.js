module.exports = {
  entry: ["./js/app.jsx", "./css/main.scss"],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?|\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          optional: ["es7.classProperties"]
        }
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      }
    ]
  }
};
