process.env.NODE_ENV = process.env.NODE_ENV || 'userion'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()
