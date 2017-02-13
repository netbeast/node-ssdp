var path = process.env.SSDP_COV ? './lib-cov/' : ''
global.Buffer = global.Buffer || require('buffer').Buffer;

module.exports = {
  Client: require('./lib/client'),
  Base: require('./lib/index')
}
