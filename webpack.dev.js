const path = require('path');
const nodeExternals = require('webpack-node-externals'); // 过滤node内置模块
const merge = require('webpack-merge');

const webpackBase = require('./webapck.base.js');

module.exports = merge.multiple(webpackBase, {
    // node服务 编译
    server: {
        target: 'node',
        entry: './server/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, './dist/server')
        },
        externals: [nodeExternals()],
    },
    // client 编译
    client: {
        entry: './client/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, './dist/client')
        }
    }
})