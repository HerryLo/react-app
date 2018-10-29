const path = require('path');
const nodeExternals = require('webpack-node-externals'); // 过滤node内置模块
const merge = require('webpack-merge');

const webpackBase = require('./webapck.base.js');

// node服务 编译
const server = {
    target: 'node',
    mode: 'development',
    devtool: "source-map",
    entry: './server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/server'),
    },
    externals: [nodeExternals()],
};

// client 编译
const client = {
    entry: './client/index.js',
    mode: 'development',
    devtool: "source-map",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/client'),
    }
};

module.exports = merge.multiple(webpackBase, {
    server: server,
    client: client
})