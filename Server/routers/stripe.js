const express = require('express')
const router = express.Router()
const stripe = require('stripe')(process.env.ECOMMERCE_SECRET_KEY)
require('dotenv').config()
router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  })

  res.send({ url: session.url })
})

module.exports = router

// router.get('/secret', async (req, res) => {
//   const intent = paymentIntent
//   res.json({ client_secret: intent.client_secret })
// })
