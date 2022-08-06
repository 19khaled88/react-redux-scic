const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const products = require('./products')
const register = require('./routers/register')
const login = require('./routers/login')
const Stripe = require('stripe')

const userList = require('./routers/userList')
const stripeRoute = require('./routers/stripe')
const app = express()
const PORT = process.env.PORT || 5000

require('dotenv').config()
const stripe = Stripe(process.env.ECOMMERCE_SECRET_KEY)
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('welcome to get method')
})
app.get('/products', (req, res) => {
  res.send(products)
})

// Stripe route

// app.get('/secret', async (req, res) => {
//   const intent = paymentIntent
//   res.json({ client_secret: intent.client_secret })
// })
app.get('/checkout-session',async(req,res)=>{
  const session = await stripe.checkout.sessions.retrieve(req.query.id,{
    expand:['line_items']
  })
  res.json(session);
})
app.use('/api/stripe', stripeRoute)
app.use('/api/charges', stripeRoute)

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
