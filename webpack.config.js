
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const outputDir = './dist'
const entry = './app.js'
const cssOutput = 'index.css'

module.exports = (env) => {    
    return [{
        entry: entry,
        output: {
            path: path.join(__dirname, outputDir),
            filename: '[name].js',
            publicPath: '/dist/'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: ['css-loader'],
                        fallback: 'style-loader'
                    })
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: ['css-loader', 'sass-loader' ],
                        fallback: 'style-loader'
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin(cssOutput)
        ]
    }]
}
