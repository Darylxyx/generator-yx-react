var path = require("path"),
  fs = require('fs'),
  webpack = require("webpack");

var vendors = [
  'Vue', 
  'Vue-router', 
  'Vuex'
];

fs.readFile('./index.html', 'utf8', (err, data) => {
  if (!err) {
    var dataStr = data.toString();
    dataStr = dataStr.replace('<!-- dll -->', '<script src="./dist/Dll.js"></script>');
    fs.writeFile('./index.html', dataStr, (err) => {
      if (!err) {
        console.log('Insert dll_tag successfully')
      } else {
        console.log(err);
      }
    });
  }
});

module.exports = {
  entry: {
    vendor: vendors
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "Dll.js",
    library: "[name]_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "dist", "manifest.json"),
      name: "[name]_[hash]",
      context: __dirname
    })
  ]
};