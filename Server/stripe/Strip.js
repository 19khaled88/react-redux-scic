const stripe = require('stripe')(process.env.ECOMMERCE_SECRET_KEY)
const paymentIntent = await stripe.paymentIntents.create({
  amount: 1099,
  currency: 'eur',
  payment_method_types: [
    'bancontact',
    'card',
    'eps',
    'giropay',
    'ideal',
    'p24',
    'sepa_debit',
    'sofort',
  ],
})
module.exports = paymentIntent

// app.get('/secret', async (req, res) => {
//   const intent = paymentIntent
//   res.json({ client_secret: intent.client_secret })
// })
