const express = require('express')
const router = express.Router()
require('dotenv').config()
const Stripe = require('stripe')
const stripe = Stripe(process.env.ECOMMERCE_SECRET_KEY)


router.post('/create-checkout-session', async (req, res) => {
   
   const line_items = req.body.cartItems.map((item)=>{
    return {
      price_data:{
        product_data:{
          name:item.name,
          images:[item.image],
          metadata:{
            id:item.id
          }
        },
        currency: "usd",
        unit_amount: item.price,
      },
      // amount: 2000,
      quantity: item.cartQuantity,
    }
    
   })
   const  shipping_options =()=> { 
    return [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: 'usd',
          },
          display_name: 'Free shipping',
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          }
        }
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1000,
            currency: 'usd',
          },
          display_name: 'Next day air',
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          }
        }
      },
    ]
  }
   
  const session = await stripe.checkout.sessions.create({
    
    // line_items: [
    //   {
    //     // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
       
    //     // price: '{{PRICE_ID}}',
    //    price_data:{
    //       product_data:{
    //         name:'Mobile',
    //       },
    //       currency: "usd",
    //       unit_amount: 2000,
    //     },
    //     // amount: 2000,
    //     quantity: 1,
    //   },
    // ],
    payment_method_types: ['card'],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA','KE','BD','PK'],
    },
    shipping_options: shipping_options,
    phone_number_collection:{
      enabled:true,
    },
    line_items,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success?id={CHECKOUT_SESSION_ID}`,
    // success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
    
  })

  // res.send({ url: session.url})
  res.json({ id: session.id,url:session.url})
  
})

module.exports = router