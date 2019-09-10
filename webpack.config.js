const ClosurePlugin = require("closure-webpack-plugin");

module.exports = {
    entry: ["./drako.js"],
    output: {
        filename: "drako.bundle.js"
    },
    optimization: {
        minimizer: [
            new ClosurePlugin({ mode: "STANDARD" }, { })
        ]
    }
}