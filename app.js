const express = require('express')
require('dotenv').config()
const config = require('config')
var path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')


const indexRouter = require('./routes/index')
const p2pRouter = require('./routes/market')

const app = express()

 // Set view engine   
 app.set('views', path.join(__dirname, 'views')); // Specify correct views folder
 app.set('view engine', 'ejs')
 app.use(express.static(path.join(__dirname, 'public'))); 
 
 // Setting expire headers for static files
let _1hourMaxAge = 3600000
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: _1hourMaxAge, // Set maximum age for all files to be 1 hour
  setHeaders: function(res, filePath) {
      if (filePath.endsWith('.png') || filePath.endsWith('.svg') || filePath.endsWith('.webp') || filePath.endsWith('.jpg') || filePath.endsWith('.jpeg') || filePath.endsWith('.webm')  || filePath.endsWith('.gif') ) {
        res.setHeader('Cache-Control', `public, max-age=${_1hourMaxAge * 24 * 30}`); // Cache image files for 30 days
      }
      if (filePath.endsWith('.css') ) {
        res.setHeader('Cache-Control', `public, max-age=${_1hourMaxAge * 24 * 7}`); // Cache css files for 7 days
      }
    }
}));

app.use('/', indexRouter)
app.use('/p2p', p2pRouter)

app.listen(process.env.RUNNING_PORT,()=>console.info(`App now listening on port ${process.env.RUNNING_PORT}`))
