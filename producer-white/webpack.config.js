/* eslint-disable @typescript-eslint/no-require-imports */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

module.exports = (_, argv) => ({
  output: {
    publicPath:
      argv.mode === 'development' ? 'http://localhost:3003/' : 'https://module-federation-poc-white.vercel.app'
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
  },

  devServer: {
    port: 3003,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'producer-white',
      filename: 'remoteEntry.js',
      remotes: {
        'mf-product': `product@${
          argv.mode === 'development' ? 'http://localhost:3001/' : 'https://module-federation-poc-white.vercel.app'
        }/remoteEntry.js`,
        'mf-sales': `sales@${
          argv.mode === 'development' ? 'http://localhost:3005/' : 'https://module-federation-poc-white.vercel.app'
        }/remoteEntry.js`
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom']
        },
        '@eduzz/houston-ui': {
          singleton: true,
          requiredVersion: deps['@eduzz/houston-ui']
        },
        '@eduzz/houston-styles': {
          singleton: true,
          requiredVersion: deps['@eduzz/houston-styles']
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom']
        }
      }
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
});
