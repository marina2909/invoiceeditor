var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");

browserify({debug: false})
.transform(babelify)
.require("./app.js", {entry: true})
.bundle()
.on("error", err => console.log(`Error: ${err.message}`))
.pipe(fs.createWriteStream("bundle.js"));