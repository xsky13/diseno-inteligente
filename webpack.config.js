var path = require('path')
var CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    devServer: {
        watchFiles: ["src/**/*"]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "src/index.html", to: "index.html" }]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, "src"),
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    }
}