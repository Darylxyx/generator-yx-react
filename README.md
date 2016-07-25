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
node parsePath.js
```
Command `--watch` will repack the project when you change.  
Command `-p` will compress the bundle.    
It will change the path which is begin with `\` into relative path when you run `parsePath.js`. 

### Dependencies
* webpack
* webpack-dev-server
* babel-loader
* react
