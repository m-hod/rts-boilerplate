import express from 'express'
import path from 'path'

import router from './routes'

const server = express()

server.use(express.static(__dirname))
server.use(express.static(path.join(__dirname, 'public')))
server.use('/', router)

export default server