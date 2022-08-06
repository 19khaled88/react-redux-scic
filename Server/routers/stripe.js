const express = require('express')
const { User } = require('../models/users')
const authGenToken = require('../helpers/authToken')
const router = express.Router()

router.get('/secret', async (req, res) => {
  const intent = paymentIntent
  res.json({ client_secret: intent.client_secret })
})
