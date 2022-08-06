import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import Stripe from 'stripe';
// const stripe = new Stripe('pk_test_8YjljN3WdgKzW5b1vZPMLtW0');
const PayButton =({cartItems})=>{
    // const stripe = Stripe('pk_test_8YjljN3WdgKzW5b1vZPMLtW0')
   
    const user = useSelector((state)=>state.auth)
    const handleCheckout=async()=>{
        const stripe = await loadStripe('pk_test_8YjljN3WdgKzW5b1vZPMLtW0');
        axios.post('http://localhost:5000/api/stripe/create-checkout-session',
        {
        cartItems,
        userId:user._id
       },
       {headers: {
        // Authorization: 'Bearer ' + varToken
        'Content-Type':'application/json'
      }}).then((response)=>
    //   console.log(response.data);
      stripe.redirectToCheckout({sessionId:response.data.id})
      )
    //   .then((id)=>{
    //     stripe.redirectToCheckout({sessionId:session.id})
      
    //     // window.location.href = data.data.url
    //    })
       .catch((error)=>console.log(error.message))

    }

    return(
        <>
            <button onClick={()=>handleCheckout()}>Check out</button>
        </>
    )
}
export default PayButton