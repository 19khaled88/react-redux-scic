import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  items: [],
  status: null,
  error: null,
}

export const productFetch = createAsyncThunk(
  'products/productsFetch',
  async () => {
    const response = await axios.get('http://localhost:5000/products')
    return response?.data
  },
)
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [productFetch.pending]: (state, action) => {
      state.status = 'pending'
    },
    [productFetch.fulfilled]: (state, action) => {
      state.status = 'success'
      state.items = action.payload
    },
    [productFetch.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
})

export default productSlice.reducer
