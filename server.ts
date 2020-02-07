const express = require('express')
const path = require('path')

const router = require('./routes')

const server = express()

server.use(express.static(__dirname))
server.use(express.static(path.join(__dirname, 'public')))
server.use('/', router)

export default server