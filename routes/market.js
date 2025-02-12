const express = require('express')
const router = express.Router()

const { marketMain, trade, mint, redeem} = require('./../controllers/market/main-market')

router.get('/', trade)

router.get('/p2p', marketMain)
router.get('/mint', mint)
router.get('/redeem', redeem)

module.exports = router