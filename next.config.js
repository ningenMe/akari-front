const withTM = require('next-transpile-modules')([
  'mami-interface',
  'kiwa-api/typescript-axios-client',
  'nina-api/proto',
  'miiko-api/proto'
])

module.exports = withTM({})
