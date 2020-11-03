const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry:  {
    app: path.resolve(__dirname, '../src/index.js')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions:['.js','.ts']
  },  
  module: {
    rules:[
        {
          test: /\.(ts|tsx)$/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }, {
            loader: 'ts-loader',
              options: {
                  // 指定特定的ts编译配置，为了区分脚本的ts配置
                  configFile: path.resolve(__dirname, '../tsconfig.json'),
              },
          }],
          exclude:/node_modules/,
        },
        {
            test:/\.(js|jsx)$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            },
            exclude:/node_modules/,
        },
        {
            test:/\.css$/,use:['style-loader','css-loader'],
            exclude:/node_modules/
        },
        {
          test:/\.module\.css$/,use:['style-loader','css-loader?modules&localIdentName=[name]-[hash:base64:5]'],
          exclude:/node_modules/
      },
        {
            test:/\.less$/,
            use:['style-loader','css-loader','less-loader'],
            exclude:/node_modules/
        },
        {
          test:/\.module\.less$/,
          use:['style-loader','css-loader?modules&localIdentName=[name]-[hash:base64:5]','less-loader'],
          exclude:/node_modules/
      },
        {
            test:/\.(png|jpg|gif|woff|svg|eot|woff2|ttf)$/,
            use:'url-loader?limit=8192',
            exclude:/node_modules/
        },
        {
            test: /\.(csv|tsv)$/,
            use: [
              'csv-loader'
            ]
        },
        {
            test: /\.xml$/,
            use: [
              'xml-loader'
            ]
        },
        {
          test: /\.html$/,
          use: 'html-loader'
        },

    ]
  }
};