var px2rem = require('postcss-px2rem')
var postcssSalad = require('postcss-salad')
var saladConf = require('./build/webpack.salad.conf.json')

module.exports = {
  'sourceMap': process.env.NODE_ENV === 'production',
  'plugins': [postcssSalad(saladConf), px2rem({remUnit: 75}) ]
}
