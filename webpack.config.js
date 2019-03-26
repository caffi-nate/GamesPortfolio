const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        './src/app.js'
    ],
    watch: true,                                                // watch the files for any changes
    watchOptions: {
        aggregateTimeout: 500,                                  // collect all changes and build together
        poll: 1000,                                             // check file changes ever 1000 milliseconds / 1 second
        ignored: /node_modules/                                 // ignore folders we don't want to watch
    },
    devtool: 'source-maps',
    devServer: {
        contentBase: path.join(__dirname, 'src'),               // where are the sourcefiles located?
        watchContentBase: true,
        hot: true,                                              // hot: hotmr - update page without browser reload
        open: true,                                             // open page when we start the server
        inline: true                                            // inject javascript and styles inline
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Starter Project',
            template: path.resolve('./src/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(mode_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|ico)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: './images',
                        name: "[name].[ext]",
                    },
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader:'html-loader',
                }
            },
        ]
    }
};
