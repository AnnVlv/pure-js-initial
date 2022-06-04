const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(process.env.NODE_ENV)
const production = process.env.NODE_ENV === 'production'

module.exports = {
    mode: production ? 'production' : 'development',
    entry: './src/main.ts',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        static: './dist',

    },
    optimization: {
        runtimeChunk: 'single',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader',],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
