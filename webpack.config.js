const { resolve } = require("path");
// const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env = {}) => {
    let plugins = [
        new HtmlWebpackPlugin({
            meta: {
                charset: "utf-8",
                viewport: "width=device-width, initial-scale=1"
            },
            template: resolve(__dirname, "src/index.html"),
            title: "React Starter"
        })
    ];

    return {
        entry: resolve(__dirname, "src/index.js"),
        output: {
            filename: "[name].bundle.js",
            path: resolve(__dirname, env.production ? "dist" : "build")
        },
        mode: env.production ? "production" : "development",
        module: {
            rules: [
                { test: /\.js/, exclude: /node_modules/, use: "babel-loader" }
            ]
        },
        plugins,
        resolve: {
            alias: {
                components: resolve(__dirname, "src/components"),
                contexts: resolve(__dirname, "src/contexts"),
                data: resolve(__dirname, "src/data"),
                enums: resolve(__dirname, "src/enums")
            }
        },
        devServer: {
            port: 9012
        }
    };
};
