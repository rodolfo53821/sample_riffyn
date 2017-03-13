const path = require('path');

module.exports = {
  context: __dirname + "/app",

  entry: {
    javascript: "./js/index.js",
    html: "./index.html",
  },

  output: {
    filename: "index.js",
    path: __dirname + "/dist",
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: path.resolve(__dirname, './app/js'),
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
        	presets: ['es2015', 'react']
      	}
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ]
  },
  devServer: {
    historyApiFallback: true
  }
}
