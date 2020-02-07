// const server = require('./server')

import server from './server'

const port = process.env.PORT || 8080

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})