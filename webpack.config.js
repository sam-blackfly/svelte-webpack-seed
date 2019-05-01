const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { sass } = require('svelte-preprocess-sass');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

const babelrc = {
  presets: ['@babel/preset-env'],
};

// Webpack loaders
const loaders = {
  babel: {
    loader: 'babel-loader',
    options: {
      compact: false,
      cacheDirectory: !prod,
      babelrc: false,
      ...babelrc
    }
  },
  svelte: {
    loader: 'svelte-loader',
    options: {
      preprocess: {
        style: sass(),
      },
      emitCss: true,
      hotReload: !prod,
    }
  },
  styles: [prod ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader']
};

// Webpack loader rules
const rules = [
  {
    test: /\.svelte$/,
    use: [loaders.babel, loaders.svelte],
    exclude: /node_modules\/(?!svelte)/,
  },
  {
    test: /\.js$/,
    use: [loaders.babel],
    exclude: /node_modules\/(?!svelte)/,
  },
  {
    test: /\.css$/,
    use: loaders.styles,
  }
];

// Webpack plugins
const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name]-[hash].css',
  }),
  new HtmlWebpackPlugin({
    title: 'Svelte Webpack',
    template: 'src/index.html',
  })
];

module.exports = {
  mode,
  entry: {
    bundle: ['./src/main.js']
  },
  resolve: {
    extensions: ['.js', '.svelte']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[hash].[id].js',
  },
  module: {rules},
  plugins,
  devtool: prod ? false : 'source-map',
};
