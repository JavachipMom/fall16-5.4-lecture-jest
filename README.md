# FEE Boilerplate React/Bable/Webpack

## Initial Setup Gotchas with Babel and Webpack
  - Install webpack `$ npm install --save-dev webpack`
  - Run `$ npm install --save-dev babel-cli`
  - Create `.babelrc` file `$ touch .babelrc`
    ```javascript
      {
        "presets": ["es2015", "react"]
      }
    ```
  - Add to `webpack.config.js`
  ```javascript
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }
      ]
    }
  ```
  - `$ npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react`
  - `$ npm install --save-dev react react-dom`
  - `$ npm install --save-dev jest react-test-renderer react-addons-test-utils`

## First time development
  - `$ npm install webpack -g`
  - `$ npm install babel-cli -g`

## Each time you pull from Github
  - `$ npm install`
