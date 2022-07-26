import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import { setupListeners } from '@reduxjs/toolkit/query'
import App from './App'
import authReducer, { loadUser } from './features/authSlice'
import cartReducer, { cartItemValueTotal } from './features/cartSlice'
import { productsApi } from './features/productsApi'
import productReducer, { productFetch } from './features/productSlice'
// import productReducer, { productFetch } from './features/productSlice';
import './index.css'

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

store.dispatch(productFetch())
store.dispatch(cartItemValueTotal())
store.dispatch(loadUser(null))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>,
)
