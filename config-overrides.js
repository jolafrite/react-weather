const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const Dotenv = require('dotenv-webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin')
const path = require('path');

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);

  config.resolve.alias = {
    ...config.resolve.alias,
    'react-dom': '@hot-loader/react-dom'
  };

  config.plugins = [
    ...config.plugins,
    new Dotenv({
      path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
      safe: true
    }),
    ...(env === 'development' ? [new CircularDependencyPlugin()] : [])
  ];

  return config;
}

