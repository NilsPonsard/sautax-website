//serveur node 
var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic(__dirname))
app.listen(80)

