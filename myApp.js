let express = require('express');
let app = express();
const indexPath = __dirname + '/views/index.html'
const assetsPath = __dirname + '/public'
const middAssets = express.static(assetsPath)

console.log("Hello World")

app.get('/', (req, res) => res.sendFile(indexPath))
app.use('/public', middAssets)

app.get('/json', (req, res) => res.json({"mesagge": "Hello json"}))

























 module.exports = app;
