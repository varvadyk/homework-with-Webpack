const NameHtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: [
        '@babel/polyfill',
        './src/index.js'

    ],
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    plugins: [
        new
        NameHtmlWebpackPlugin({
                filename: "index.html",
                template: "./src/index.html"
            }

        )
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif|jpg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }

};