const express = require('express')
const router = express.Router()

const { marketMain } = require('./../controllers/market/main-market')

router.get('/', marketMain)

module.exports = router