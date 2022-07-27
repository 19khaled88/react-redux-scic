import React from 'react';
import { useSelector } from 'react-redux';
const Admin = () => {
    const auth = useSelector((state)=>state.auth)
   
  return (
    <div>
      <p>Admin Page</p>
    </div>
  );
}

export default Admin;
