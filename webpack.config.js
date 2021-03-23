const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const isProduction = process.env["NODE_ENV"] === "production"
const path = require('path')

module.exports = {
    externals: { "agora-electron-sdk": "commonjs2 agora-electron-sdk" },
    watch: isProduction ? false : true,

    target: 'electron-renderer',

    entry: './src/renderer/index.js',

    output: {
        path: __dirname + '/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            },
            {
                test: /\.js^$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, './src')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env.GH_TOKEN': JSON.stringify(process.env.GH_TOKEN)
        })
    ],

    resolve: {
        extensions: ['.js', '.json', '.jsx']
    }

}