const bcrypt = require('bcrypt')
const Joi = require('joi')
const express = require('express')
const { User } = require('../models/users')
const authGenToken = require('../helpers/authToken')
const router = express.Router()

router.post('/', async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().min(3).max(300).required().email(),
    password: Joi.string().min(3).max(1024).required(),
  })

  const { error } = schema.validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)
  const ifUserExist = await User.findOne({ email: req.body.email })
  if (ifUserExist) {
    return res.status(400).send('User already exist')
  }
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
  const salted_password = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(user.password, salted_password)
  await user.save()
  const token = authGenToken(user)
  res.send(token)
})

module.exports = router
