'use strict';

const path                   = require('path'),
      webpack                = require('webpack'),
      HTMLPlugin             = require('html-webpack-plugin'),
      { CleanWebpackPlugin } = require('clean-webpack-plugin'),
      ExtractTextPlugin      = require('extract-text-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, './app/static'),
    build: path.join(__dirname, './app/public')
};

module.exports = {
    entry: [
        `${PATHS.src}/js/index.js`,
        `${PATHS.src}/sass/index.sass`
    ],
    output: {
        path: path.resolve(__dirname, PATHS.build),
        filename: 'script/script.bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, `${PATHS.src}/sass`),
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: false
                        }
                    },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                sassOptions: {
                                    outputStyle: 'compressed',
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                }]
            },
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.html', '.sass', '.scss', '.css'],
        alias: {
            jquery: require.resolve('jquery')
        }
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '/style/style.bundle.css',
            allChunks: true,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            '$': 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jquery': 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
};