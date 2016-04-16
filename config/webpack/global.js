'use strict';

// Depends
var path         = require('path');
var webpack      = require('webpack');
var Manifest     = require('manifest-revision-webpack-plugin');
var TextPlugin   = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer-core');
var HtmlPlugin   = require('html-webpack-plugin');

/**
 * Global webpack config
 * @param  {[type]} _path [description]
 * @return {[type]}       [description]
 */
module.exports = function(_path) {
  // define local variables
  var dependencies  = Object.keys(require(_path + '/package').dependencies);
  var rootAssetPath = _path + 'app';
  // return objecy
  return {
    // entry points
    entry: {
      application: _path + '/app/app.js',
      vendors: dependencies
    },

    // output system
    output: {
      path: path.join(_path, 'dist'),
      filename: path.join('assets', 'js', '[name].[hash].js'),
      chunkFilename: '[id].bundle.[chunkhash].js',
      publicPath: '/'
    },

    // resolves modules
    resolve: {
      extensions: ['', '.js'],
      modulesDirectories: ['node_modules'],
      alias: {
        _svg: path.join(_path, 'app', 'assets', 'svg'),
        _fonts: path.join(_path, 'app', 'assets', 'fonts'),
        _modules: path.join(_path, 'app', 'modules'),
        _images: path.join(_path, 'app', 'assets', 'images'),
        _stylesheets: path.join(_path, 'app', 'assets', 'stylesheets'),
        _templates: path.join(_path, 'app', 'assets', 'templates')
      }
    },

    // modules resolvers
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          query: {
            presets: ['es2015'],
            plugins: ['transform-object-assign']
          }
        },
        { test: /\.jade$/, loader: 'jade-loader' },
        { test: /\.styl$/, loader: TextPlugin.extract('style-loader', 'css-loader!postcss-loader!stylus-loader') },
        { test: /\.(css|ttf|eot|woff|woff2|png|ico|jpg|jpeg|gif|svg)$/i, loaders: ['file?context=' + rootAssetPath + '&name=assets/static/[ext]/[name].[hash].[ext]'] },
      ]
    },

    // post css
    postcss: [autoprefixer({ browsers: ['last 5 versions'] })],

    // load plugins
    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendors', 'assets/js/vendors.[hash].js'),
      new TextPlugin('assets/css/[name].[chunkhash].css'),
      new Manifest(path.join(_path + '/config', 'manifest.json'), {
        rootAssetPath: rootAssetPath,
        ignorePaths: ['.DS_Store']
      }),
      // create instance for entrypoint index.html building
      new HtmlPlugin({
        title: 'Landhouse',
        chunks: ['application', 'vendors'],
        filename: 'index.html',
        template: path.join(_path, 'app', 'assets', 'templates', 'layouts', 'index.html')
      }),
      new HtmlPlugin({
        title: 'Contacts',
        chunks: ['application', 'vendors'],
        filename: 'contacts.html',
        template: path.join(_path, 'app', 'assets', 'templates', 'layouts', 'contacts.html')
      }),
      new HtmlPlugin({
        title: 'Map',
        chunks: ['application', 'vendors'],
        filename: 'map.html',
        template: path.join(_path, 'app', 'assets', 'templates', 'layouts', 'map.html')
      })
    ]
  };
};
