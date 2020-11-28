module.exports = {

  "pluginOptions": {
    "cordovaPath": "src-cordova"
  },
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production' ?
      '/static/' :
      '/'
}