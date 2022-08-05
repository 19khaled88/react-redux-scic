import React, { useEffect, useLayoutEffect, useState } from 'react'
import '../css/cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
  cartItemValueTotal,
  clearCart,
  decreaseCartItemNumbers,
  increaseCartItemNumbers,
  removeCartItem,
} from '../features/cartSlice'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const auth = useSelector((state) => state.auth)
  const [size, setSize] = useState([0, 0])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(cartItemValueTotal())
  }, [cart])

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
  const checkoutSuccess = () => {}
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
                <button onClick={() => checkoutSuccess()}>Check out</button>
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
    </div>
  )
}

export default Cart
