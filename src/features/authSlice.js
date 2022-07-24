import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('token'),
  name: '',
  email: '',
  _id: '',
  registerStatus: '',
  registerError: '',
  loginStatus: '',
  loginError: '',
  userLoaded: false,
}

export const registerUser = createAsyncThunk('auth/registerUser')
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {},
})

export default authSlice.reducer
