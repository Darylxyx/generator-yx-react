# Generator yx
Basic configuration has been completed base on Webpack.  
Later,will try to use Gulp or NodeJs extend this.

### Usage

```
npm install
npm start
open loaclhost:3000/webpack-dev-server/app
```

Now edit `app/index.js` & `app/style.css`.  
Your changes will appear without refresh the browser.

### Packing

```
webpack --watch
webpack -p
```
Command `--watch` will repack the project when you change.  
Command `-p` will compress the bundle.

### Dependencies
* webpack
* webpack-dev-server
* babel-loader
* react
