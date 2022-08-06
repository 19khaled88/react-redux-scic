const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const products = require('./products')
const register = require('./routers/register')
const login = require('./routers/login')
const userList = require('./routers/userList')
const app = express()
const PORT = process.env.PORT || 5000

require('dotenv').config()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('welcome to get method')
})
app.get('/products', (req, res) => {
  res.send(products)
})

app.get('/secret',async(req,res)=>{
  const intent = paymentIntent
  res.json({client_secret:intent.client_secret})
})
app.use('/api/userList', userList)
// app.get('/product', (req, res) => {
//   res.send(products)
// })

app.use('/api/register', register)
app.use('/api/login', login)
const uri = process.env.SERVER_LINK

app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`))
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Mongodb connected'))
  .catch(() => console.log('Mongodb connection failed'))
