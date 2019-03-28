const express = require('express')
const bodyParser = require('body-parser')
const pino = require('express-pino-logger')()
const multer = require('multer')
const multerConfig = require('./config/multer')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino)

function readConfigA () {
  const upload = multer(multerConfig).single('file')

  function middleware (req, res, next) {
    upload(req, res, function (err) {
      req.uploadError = err
      next()
    })
  }

  return middleware
}

app.get('/files/upload', (req, res) => {
  res.send('Hi there! Things are working fine here!')
})

app.post('/files/upload', readConfigA(), (req, res) => {
  if (req.uploadError) {
    return res.json({
      error: true,
      message: req.uploadError.message
    })
  }

  return res.json({
    error: false,
    message: 'File uploaded successfully',
    filename: req.file.sanitizedName
  })
})

app.listen(3001, () => console.log('App is running on localhost:3001'))
