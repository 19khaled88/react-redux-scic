import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerUser } from '../features/authSlice'
const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.auth)
  function validateForm() {
    return email.length > 0 && password.length > 0
  }
  function handlerSubmit(event) {
    event.preventDefault()
    dispatch(registerUser({name:name,email:email,password:password}))
  }
  
  return (
    <div className="register-form">
      <span
        style={{
          padding: '8px',
          marginBottom: '10px',
          background: '#7E959F',
          borderRadius: '5px',
          width: '300px',
          textAlign: 'center',
          color: '#F4ECE8',
        }}
      >
        Register your account
      </span>
      <Form className="form-container" onSubmit={handlerSubmit}>
        <Form.Group size="lg" controlId="name" className="form-fields">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group size="lg" controlId="email" className="form-fields">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group size="lg" controlId="password" className="form-fields">
          <Form.Label>Password</Form.Label>
          <Form.Control
            autoFocus
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          className="form-button"
          block="true"
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          Register
        </Button>
        {auth.registerStatus === 'rejected' ? <p 
          style={{  
            backgroundColor:'#EB1D36',
            borderRadius:'5px',
            paddingTop:'5px',
            paddingBottom:'5px',
            marginTop:'5px',
            paddingLeft:'4px',
            paddingRight:'4px',
            color:'#E2DCC8',
          }}
        >{auth.registerError}</p> : null}
      </Form>
      <span
        style={{
          padding: '8px',
          marginTop: '10px',
          background: '#E78A71',
          borderRadius: '5px',
          width: '300px',
          textAlign: 'center',
        }}
      >
        Have already Account?
        <Link style={{ paddingLeft: '7px' }} to="/login">
          Login
        </Link>
      </span>
    </div>
  )
}

export default Register
