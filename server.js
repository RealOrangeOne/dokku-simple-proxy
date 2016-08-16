const httpProxy = require('http-proxy');

const port = process.env.PORT || 5000;
const host = process.env.TARGET;

if (!host) {
  console.error('TARGET environment variable not set');
  process.exit(1);
}

console.log('Starting proxy server on port', port);
httpProxy.createProxyServer({ target: host }).listen(port);
