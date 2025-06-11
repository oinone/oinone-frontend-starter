const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          include: path.resolve('src'),
          use: [
            {
              loader: 'thread-loader',
              options: {
                workers: 3
              }
            }
          ]
        }
      ]
    },
    resolve: {
      fallback: {
        crypto: false
      }
    },
    plugins: [new Dotenv()]
  },
  chainWebpack: (config) => {
    config.plugins.delete('fork-ts-checker');
    config.cache({
      type: 'filesystem'
    });
    config.plugin('html').tap((args) => {
      args[0].chunksSortMode = (a, b) => {
        if (a.entry !== b.entry) {
          return b.entry ? -1 : 1;
        }
        return 0;
      };
      return args;
    });
    config.optimization.splitChunks({
      ...config.optimization.get('splitChunks'),
      cacheGroups: {
        libs: {
          name: 'chunk-a',
          test: /[\\/]node_modules[\\/]/,
          priority: 1,
          chunks: 'initial',
          maxSize: 6000000,
          minSize: 3000000,
          maxInitialRequests: 5
        },
        oinone: {
          name: 'chunk-b',
          test: /[\\/]node_modules[\\/]@oinone[\\/]/,
          priority: 2,
          chunks: 'initial',
          maxSize: 6000000,
          minSize: 3000000,
          maxInitialRequests: 5
        },
        common: {
          name: 'chunk-c',
          minChunks: 2,
          priority: 3,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    });
  },
  devServer: {
    port: 8080,
    hot: true,
    compress: true,
    client: {
      overlay: false,
      progress: true
    },
    proxy: {
      '/pamirs': {
        changeOrigin: true,
        target: 'http://192.168.0.0:8080' // 请求后端地址
      }
    }
  }
};
