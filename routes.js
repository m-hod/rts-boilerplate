const express = require('express')

const router = express.Router()

router.get('/api/hi', (req, res) => {
    res.send({ greeting: 'hi' })
})

router.get('/hi', (req, res) => {
    res.send({ greeting: 'hi' })
})

router.get('/', (req, res) => {
    res.sendFile('./dist/index.html')
})

module.exports = router