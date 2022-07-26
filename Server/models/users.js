const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 20 },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 300,
    unique: true,
  },
  password: { type: String, required: true, minlength: 3, maxlength: 1024 },
  isAdmin:{
    type:Boolean,default:false
  }
})
const User = mongoose.model('User', userSchema)
exports.User = User
