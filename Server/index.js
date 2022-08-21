const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const products = require('./products')
const register = require('./routers/register')
const login = require('./routers/login')
const Stripe = require('stripe')
const {Order} = require('./models/order')

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

//payment 
app.post('/payment',async(req, res)=>{
  // console.log(req.body.cart,req.body.items,req.body.amount)
  try {
   const amount = req.body.amount;
   const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency:'usd',
    payment_method_types:['card'],
    metadata:{
      name:'value'
    }
   });
   const clientSecret = paymentIntent.client_secret 
   res.json({clientSecret, message:'Payment initiated successfully'})
  } catch (error) {
    console.error(error)
    res.status(500).json({message:'Internal server error'})
  }
})
app.post('/stripe',async(req,res)=>{
  if(req.body.type === 'payment_intent_created'){
    console.log(`${req.body.data.object.metada.name} initiated payment`)
  }
  if(req.body.type === 'payment_intent_succeeded'){
    console.log(`${req.body.data.object.metadata.name} succeeded payment`)
  }
})
app.post('/paymentSuccessful',async(req,res)=>{
  const data = req.body 
  // console.log(data.items)
  // console.log(data.amount)
  // console.log(data.clientKey)
  // console.log(data.cart)

  const newOrder = new Order({
    customerId:data.clientKey,
    totalItems:data.items,
    totalAmount:data.amount,
    products:data.cart,
    payment_status:'successful'
  })
  try {
    const saveOrder = await newOrder.save()
    console.log('order saved successfuly')
    if(saveOrder){
      res.status(200).json({'success':'true', message:'Order saved successfully'})
    }
  } catch (error) {
    console.error(error)
  }
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
