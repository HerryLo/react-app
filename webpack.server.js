const path = require('path');
const nodeExternals = require('webpack-node-externals'); // 过滤node内置模块

module.exports = {
    target: 'node',
    mode: 'development',
    entry: './server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react', 'stage-0', ['env', [{
                        targets: {
                            browsers: ['last 2 versions']
                        }
                    }]]
                    ]
                }
            }
        ]
    }
}