import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { url } from './api'

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

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (values, {rejectWithValue})=>{
    try {
     const token =await  axios.post(`${url}/register`,{
        name:values.name,
        email:values.email,
        password:values.password
      })
      localStorage.setItem('token',token.data)
      return token.data
    } catch (error) {
     
      return rejectWithValue(error.response.data)

    }
  }
  )
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadUser(state,action){
      const token = state.token
      if(token){
        const user = jwtDecode(token)
        return{
          ...state,
          token:action.payload,
          name:user.name,
          email:user.email,
          _id:user._id,
          userLoaded:true
        }
      }
    },
    logoutUser(state,action){
      localStorage.removeItem('token')
      return{
        token: '',
        name: '',
        email: '',
        _id: '',
        registerStatus: '',
        registerError: '',
        loginStatus: '',
        loginError: '',
        userLoaded: false,
      }
    }
  },
  extraReducers:(builder)=> {
    builder.addCase(registerUser.pending, (state,action)=>{
      return {...state, registerStatus:'pending'}
    })
    builder.addCase(registerUser.fulfilled, (state,action)=>{
      if(action.payload){
        const user = jwtDecode(action.payload)
        return {
          ...state,
          token:action.payload,
          name:user.name,
          email:user.email,
          _id:user._id,
          registerStatus:'success'
        }
      }else return state
      
    })
    builder.addCase(registerUser.rejected, (state,action)=>{
     
      return{
        ...state,
        registerStatus:'rejected',
        registerError:action.payload
      }
    })
  },
})

export const {loadUser,logoutUser} = authSlice.actions
export default authSlice.reducer
