const withTM = require('next-transpile-modules')([
  'kiwa-api/typescript-axios-client',
  'nina-api/proto',
  'miiko-api/proto',
  'suzu-backend/api/proto',
  'roman-api/client'
])

module.exports = withTM({})
