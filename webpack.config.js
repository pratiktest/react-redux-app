var path = require("path");

var CLIENT = path.resolve(__dirname, "client");
var OUTPUT = path.resolve(__dirname, "build/client");

var config = {
  //code enters here.it starts from here
  entry: CLIENT + "/index.jsx",

  //bundle.js is created in this directory
  output: {
    path: OUTPUT,
    filename: "bundle.js"
  },
  //enable source mapping for debugging in chrome
  devtool: "#eval-source-map",
  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
       options: {
         //enable object spread operator. this operator is handy in redux to copy the state and pass to next state
          plugins: [require('babel-plugin-transform-object-rest-spread')]
       },
      include: CLIENT
    }]
  },
  devServer :{
    //create a index.html in public folder which serves bundle.js for webpack-dev-server to work
    contentBase:"./public",
    //this tells webpack dev server to fall back to client side routing in case route is not found on server. This is exactly what our production express server does
    //server.get('*', (req, res) => res.send(template)); for all other end points it just sends the template
    historyApiFallback: {
      index: 'index.html'
    },
    port:3000,
    inline:true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
