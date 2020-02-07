const merge = require('webpack-merge')
const common = require('./webpack.common')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin(),
            new OptimizeCSSAssetsPlugin()
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'RTS Boilerplate'
        })
    ]
})