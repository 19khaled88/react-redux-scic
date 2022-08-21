const express = require('express')
const { User } = require('../models/users')
const authGenToken = require('../helpers/authToken')
const router = express.Router()

router.get('/', async (req, res) => {
  const user = await User.find()
  // console.log(user)
  if (!user) {
    return res.status(400).send('No users found')
  } else {
    res.status(200).send(user)
  }
})

module.exports = router
