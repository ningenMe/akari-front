const withTM = require('next-transpile-modules')([
  'mami-interface',
  'kiwa-api/typescript-axios-client',
  'miiko-api/proto'
])

module.exports = withTM({})
