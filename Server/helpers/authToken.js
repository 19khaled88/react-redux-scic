const jwt = require('jsonwebtoken')

const authGenToken = (user) => {
  const secretekey = process.env.SECRETE_KEY

  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    secretekey,
  )
  return token
}
module.exports = authGenToken
