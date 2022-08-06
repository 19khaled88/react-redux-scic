import React, { useEffect, useLayoutEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
import {
  Elements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../css/cart.css';
import {
  cartItemValueTotal,
  clearCart,
  decreaseCartItemNumbers,
  increaseCartItemNumbers,
  removeCartItem
} from '../features/cartSlice';
// import CheckoutForm from './CheckoutForm';
import PayButton from './Paybtn';
const stripePromise = loadStripe('pk_test_8YjljN3WdgKzW5b1vZPMLtW0');
const Cart = () => {
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cart)
  const auth = useSelector((state) => state.auth)
  const [size, setSize] = useState([0, 0])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(cartItemValueTotal())
  }, [cart])
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeCartItemHandler = (cartItem) => {
    dispatch(removeCartItem(cartItem))
  }
  const decreaseHandler = (cartItem) => {
    dispatch(decreaseCartItemNumbers(cartItem))
  }
  const increaseHandler = (cartItem) => {
    dispatch(increaseCartItemNumbers(cartItem))
  }
  const clearCartHandler = () => {
    dispatch(clearCart())
  }
  const checkoutSuccess = () => {
    handleShow()
  
  }
  const checkoutLogin = () => {
    navigate('/login')
  }
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return (
    <Elements stripe={stripePromise}>
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="has-cart">
          <div className="items-in-cart">
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems?.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <div className="product-name-image">
                      <img
                        className=""
                        src={cartItem.image}
                        alt={cartItem.image}
                      />
                      <div>
                        <h3>{cartItem.name}</h3>
                        {/* <button
                          className="removeButton"
                          onClick={() => removeCartItemHandler(cartItem)}
                        >
                          Remove
                        </button> */}
                      </div>
                    </div>
                    <div className="cart-product-price">${cartItem.price}</div>
                    <div className="cart-product-quantity">
                      <button onClick={() => decreaseHandler(cartItem)}>
                        -
                      </button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button onClick={() => increaseHandler(cartItem)}>
                        +
                      </button>
                    </div>
                    <div className="cart-product-total-price">
                      ${cartItem.price * cartItem.cartQuantity}
                    </div>
                    <div className="rmBtn">
                      {size[0] <= 714 ? (
                        <i
                          onClick={() => removeCartItemHandler(cartItem)}
                          className="fa fa-close"
                          style={{ fontSize: '25px', color: 'red' }}
                        ></i>
                      ) : (
                        <button
                          className="removeButton"
                          onClick={() => removeCartItemHandler(cartItem)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-summary">
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              {auth._id ? (
                <>
               { /*<button onClick={() => checkoutSuccess()}>Check out</button>*/}
                <PayButton cartItems={cart.cartItems} />
                {/*<CheckoutForm />*/}
                </>
              ) : (
                <button
                  className="checkoutLogin"
                  onClick={() => checkoutLogin()}
                >
                  Check out
                </button>
              )}
              <div className="start-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue shopping</span>
                </Link>
              </div>
            </div>
            <button onClick={() => clearCartHandler()} className="clear-cart">
              Clear Cart
            </button>
          </div>
        </div>
      )}
     {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
            type="email"
            placeholder="name@example.com"
            autoFocus
        />
        </Form.Group>
        <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
        >
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
            Save Changes
        </Button>
        </Modal.Footer>
      </Modal> */ }         

    </div>
    </Elements>
  )

    
}

export default Cart
