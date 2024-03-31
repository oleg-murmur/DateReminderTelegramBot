import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path' 
import {CleanWebpackPlugin} from 'clean-webpack-plugin'
let __dirname = path.resolve(path.dirname(''))
export default {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        port: 1234
    },
    plugins: [
        new HtmlWebpackPlugin({
            templapte: path.resolve(__dirname,'src', 'index.html')
        }),
        new CleanWebpackPlugin()
    ]
}