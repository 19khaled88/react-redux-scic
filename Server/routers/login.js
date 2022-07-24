const bcrypt = require('bcrypt')
const Joi = require('joi')
const express = require('express')
const { User } = require('../models/users')
const authGenToken = require('../helpers/authToken')
const router = express.Router()

router.post('/', async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(3).max(300).required().email(),
    password: Joi.string().min(3).max(1024).required(),
  })
  const { error } = schema.validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)
  const user = await User.findOne({ email: req.body.email })
  if (!user) {
    return res.status(400).send('This user not exist')
  }
  const isTrueUser = await bcrypt.compare(req.body.password, user.password)
  if (!isTrueUser) return res.status(400).send('Invalid email or password')

  const token = authGenToken(user)
  res.send(token)
})
module.exports = router
