// Check if user wants to create a new smart wallet or if they want to link to an existing wallet.
const express = require('express')
const router = express.Router()

const { connectWallet } = require('../controllers/wallet/wallet-connect')

router.get('/', connectWallet)

module.exports = router