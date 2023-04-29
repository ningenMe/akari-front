const withTM = require('next-transpile-modules')([
  'kiwa-api/typescript-axios-client',
  'nina-api/proto',
  'miiko-api/proto'
])

module.exports = withTM({})
