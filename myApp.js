require('dotenv').config()
let express = require('express');
let app = express();
const indexPath = __dirname + '/views/index.html'
const assetsPath = __dirname + '/public'
const middAssets = express.static(assetsPath)

console.log("Hello World")

app.get('/', (req, res) => res.sendFile(indexPath))
app.use('/public', middAssets)

const jsonHandler = (req, res) => {
  let helloMess = process.env.MESSAGE_STYLE == 'uppercase' ? 'HELLO JSON' : 'Hello json'
  
  return res.json({"message": helloMess})
}

app.get('/json',  jsonHandler)

























 module.exports = app;
