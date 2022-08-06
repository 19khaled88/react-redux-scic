import React, { useEffect } from 'react';

const CheckoutSuccess = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const id = queryParams.get('id')
  const sessionData = document.getElementById('session-Data')
 useEffect(()=>{
  fetch('http://localhost:5000/checkout-session?id='+id,{
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    }
  })
  .then((response)=>response.json())
  .then((session)=>{
    sessionData.innerText = JSON.stringify(session,null,2)
    // console.log(session)
  })
  .catch((error)=>{
    console.log('Error',error)
  })
 },[])
  return (
    <div>
      <p>Checkout Success</p>
      <div id="session-Data"></div>
    </div>
  );
}

export default CheckoutSuccess;
