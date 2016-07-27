# Generator yx
Basic configuration has been completed base on Webpack.  
Later,will try to use Gulp or NodeJs extend this.

### Usage

```
npm install
npm start
open loaclhost:3000
```

Now edit `app/index.js` & `app/style.css`.  
Your changes will appear without refresh the browser.

### Packing

```
webpack --watch
webpack -p
node pack.js
```
Command `--watch` will repack the project when you change.  
Command `-p` will compress the bundle.    
It will copy a HTML file into dist folder. So, you can directly run the dist folder in static or any server.

### Dependencies
* webpack
* webpack-dev-server
* babel-loader
* react
