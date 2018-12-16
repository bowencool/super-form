const path = require('path');

function assetsPath(_path) {
  return path.posix.join('static', _path);
}

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
// const NODE_ENV = process.env.NODE_ENV || 'development';
// const isProd = NODE_ENV === 'production';

module.exports = {
  assetsPath,
  resolve,
  // NODE_ENV,
  // isProd,
};
