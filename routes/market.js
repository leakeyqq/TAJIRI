const express = require('express')
const router = express.Router()

const { marketMain, trade, mint} = require('./../controllers/market/main-market')

router.get('/', trade)

router.get('/p2p', marketMain)
router.get('/mint', mint)

module.exports = router