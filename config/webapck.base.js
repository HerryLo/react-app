const jsLoader = {
    test : /\.js$/,
    loader : 'babel-loader',
    exclude: /node_modules/,
    options: {
        presets: ['react', 'stage-0', 'es2015', ['env', [{
            targets: {
                browsers: ['last 2 versions']
            }
        }]]
        ],
        plugins: ["transform-runtime","transform-class-properties"]
    }
}

module.exports = {
    server: {
        module: {
            rules: [
                jsLoader
            ]
        }
    },
    client: {
        module: {
            rules: [
                jsLoader
            ]
        }
    }
}