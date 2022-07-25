import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function validateForm() {
    return email.length > 0 && password.length > 0
  }
  function handlerSubmit(event) {
    event.preventDefault()
   
  }
  return (
    <div className="login-form">
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
        Login your account
      </span>
      <Form className="form-container" onSubmit={handlerSubmit}>
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
          Login
        </Button>
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
        Don't have Account?
        <Link style={{ paddingLeft: '7px' }} to="/register">
          register
        </Link>
      </span>
    </div>
  )
}

export default Login
