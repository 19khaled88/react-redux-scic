import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { setupListeners } from '@reduxjs/toolkit/query'
import App from './App';
import { productsApi } from './features/productsApi';
import productReducer, { productFetch } from './features/productSlice';
// import productReducer, { productFetch } from './features/productSlice';
import './index.css';

const store = configureStore({
  reducer:{
    products:productReducer,
    [productsApi.reducerPath]:productsApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>
     getDefaultMiddleware().concat(productsApi.middleware)
  
})


store.dispatch(productFetch())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


