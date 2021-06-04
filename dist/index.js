
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./polysale-sdk.cjs.production.min.js')
} else {
  module.exports = require('./polysale-sdk.cjs.development.js')
}
