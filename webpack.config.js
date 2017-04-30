var path = require("path");
var webpack = require("webpack");

var cfg = {
    devtool: "source-map",
    entry: "./temp/code.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                loader: "source-map-loader"
            }
        ]
    }
};

module.exports = cfg;