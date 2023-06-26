let express = require('express');
let app = express();
const indexPath = __dirname + '/views/index.html'

console.log("Hello World")


app.get("/", (req, res) => res.sendFile(indexPath))



























 module.exports = app;
