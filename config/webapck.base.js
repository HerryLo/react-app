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

const clientCssLoader = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [ 'style-loader', {
            loader: 'css-loader',
            options: {
                importLoader: 1,
                modules: true,
                localIdentName: '[name]_[local]_[hash:base64:5]'
            }
        }
    ]
}

const serverCssLoader = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [ 'isomorphic-style-loader', {
            loader: 'css-loader',
            options: {
                importLoader: 1,
                modules: true,
                localIdentName: '[name]_[local]_[hash:base64:5]'
            }
        }
    ]
}

module.exports = {
    server: {
        module: {
            rules: [
                jsLoader,
                serverCssLoader
            ]
        }
    },
    client: {
        module: {
            rules: [
                jsLoader,
                clientCssLoader
            ]
        }
    }
}