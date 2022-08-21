import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import { useSelector,useDispatch } from 'react-redux';
import {clearCart,orderSuccessful} from '../features/cartSlice'
import axios from 'axios';
import React, { useState } from 'react';
const CheckoutForm = () => {
  const [success, setSuccess] = useState('')
  const [clientKey, setClientKey] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const cart = useSelector((state)=>state.cart)
  const arr = cart.cartItems
  const dispatch = useDispatch()
  const cleartCartItem=()=>{
    dispatch(orderSuccessful())
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if(!error){
        const {id} = paymentMethod
        const data = {cart:cart.cartItems,items:cart.cartTotalQuantity,amount:cart.cartTotalAmount}
        const headers = { 
          'Authorization': 'Bearer my-token',
          'Content-Type': 'application/json'
      };
       try {
         const response = await axios.post('http://localhost:5000/payment',
            {cart:cart.cartItems,items:cart.cartTotalQuantity,amount:cart.cartTotalAmount},
            {headers}
            )
            const data = await response.data;
          
            // console.log(data)
            // console.log(response)
            // console.log(response.config.data)
           
            const cardElement = elements.getElement(CardElement)
            const confirmPayment = await stripe.confirmCardPayment(data.clientSecret,{
              payment_method: {card:cardElement}
            })
            const {paymentIntent} = confirmPayment;
            if(paymentIntent.status === 'succeeded') {
              setSuccess('success')
              setClientKey(data.clientSecret)
              // alert('Payment Successful')
            }else {
              setSuccess('failure')
              alert('Payment not successful')
            }
       } catch (error) {
          console.error(error)
          alert('Payment failed')
       }
    }
    if(success === 'success' && clientKey !== ''){
      const headers = { 'Authorization': 'Bearer my-token','Content-Type': 'application/json' };
      const data = JSON.stringify({cart:cart.cartItems,items:cart.cartTotalQuantity,amount:cart.cartTotalAmount,clientKey:clientKey})
      const response = await axios.post('http://localhost:5000/paymentSuccessful',data,{headers})
      const res = await response;
      console.log(res)
      if(res){
          setSuccess('')
          setClientKey('')
          cleartCartItem()
        }
      };
  }
 
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe || !elements}>
          Pay Bill
        </button>
        </form>
    </div>
  );
}

export default CheckoutForm;
