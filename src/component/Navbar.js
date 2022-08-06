import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { logoutUser } from '../features/authSlice'
const Navbar = () => {
  const cart = useSelector((state) => state.cart)
  const auth = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // useEffect(() => {
  //  if(auth.token){
  //   navigate('/cart')
  //  }
  // }, [navigate,auth.token]);

  const logoutHandler = () => {
    dispatch(logoutUser(null))
    toast.warning('Logged out successfully', {
      position: 'top-right',
    })
    navigate('/login')
  }

  return (
    <nav className="nav-bar">
      <Link to="/">
        <h2>Shop Line</h2>
      </Link>
      <div className="right-corner flex-gap">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <Link to="/cart">
          <div className="nav-bag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-handbag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
            </svg>
            <span className="bag-quantity">
              <span className="">{cart.cartTotalQuantity}</span>
            </span>
          </div>
        </Link>
        {auth.token ? <Link to="/dashboard">Dashboard</Link> : ''}

        {auth.token ? (
          <button onClick={() => logoutHandler()}>
            {' '}
            <i className="fa fa-sign-out" aria-hidden="true"></i>Logout
          </button>
        ) : (
          <Link to="/register">
            <i className="fa fa-user-plus" aria-hidden="true"></i>Register
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
