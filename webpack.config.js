const path = require('path');
const defaults = require('lodash.defaultsdeep');

const base = {
  entry: './src/ipfinder.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'Ipfinder',
    libraryTarget: 'umd',
  },
};

const prod = defaults({}, base, {
  output: {
    filename: 'ipfinder.min.js',
  },
  mode: 'production',
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
});

const dev = defaults({}, base, {
  output: {
    filename: 'ipfinder.js',
  },
  mode: 'development',
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
});

module.exports = [prod, dev];