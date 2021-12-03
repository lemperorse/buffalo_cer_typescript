const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  publicPath: '',
  "pluginOptions": {
    "cordovaPath": "src-cordova"
  },
  devServer: {
    public: '192.168.1.2:8080',
    https: true 
  },
  // "transpileDependencies": [
  //   "vuetify"
  // ],
  publicPath: process.env.NODE_ENV === 'production' ?
      '/buffalo_cer_typescript/' :
      '/'
}