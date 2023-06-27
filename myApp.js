require('dotenv').config()
let express = require('express');
let app = express();
const indexPath = __dirname + '/views/index.html'
const assetsPath = __dirname + '/public'
const middAssets = express.static(assetsPath)

console.log("Hello World")

const simpleLogger = (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
}

app.use(simpleLogger)

app.get('/', (req, res) => res.sendFile(indexPath))
app.use('/public', middAssets)

const jsonHandler = (req, res) => {
  let helloMess = process.env.MESSAGE_STYLE == 'uppercase' ? 'HELLO JSON' : 'Hello json'
  
  return res.json({"message": helloMess})
}

app.get('/json',  jsonHandler)

const currentTime = (req, res, next) => {
  req.time = new Date().toString()
  
  next()
}
const timeHandler = (req, res) => {
  res.json({"time": req.time})
}

app.get('/now', currentTime, timeHandler)





















 module.exports = app;
