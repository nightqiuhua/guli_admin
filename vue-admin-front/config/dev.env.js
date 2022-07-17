'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:9001"',
  OSS_PATH: '"https://guli-file.oss-cn-beijing.aliyuncs.com"'
})
