import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const initialState={
    cartItems:localStorage.getItem('cartInfo') ? JSON.parse(localStorage.getItem('cartInfo')):[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const itemsIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id)
            if(itemsIndex >= 0){
                state.cartItems[itemsIndex].cartQuantity += 1
                toast.info(`${state.cartItems[itemsIndex].name} quantity increased 1`,{position: "bottom-left"})
            }else{
              const tempProduct = {...action.payload, cartQuantity:1}
              state.cartItems.push(tempProduct) 
              toast.success(`${action.payload.name} added to cart`,{
                position:"bottom-left"
              })
            }

            localStorage.setItem('cartInfo',JSON.stringify(state.cartItems))
            
            
        },
        removeCartItem(state,action){
            const leftCartItem = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            )
            state.cartItems = leftCartItem
            localStorage.setItem('cartInfo',JSON.stringify(state.cartItems))
            toast.error(`${action.payload.name} removed from cart items`,{
                position:'top-right'
            })
        },
        decreaseCartItemNumbers(state, action){
            const itemIndex = state.cartItems.findIndex(cartItem =>
                    cartItem.id === action.payload.id
                )
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1
            }else if( state.cartItems[itemIndex].cartQuantity === 1 ){
                const tempItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
                state.cartItems = tempItems
                toast.error(`${action.payload.name} removed from cart`,{
                    position:'top-right'
                })
            }
            localStorage.setItem('cartInfo',JSON.stringify(state.cartItems))
        },
        increaseCartItemNumbers(state, action){
            const itemIndex = state.cartItems.findIndex(cartItem =>
                    cartItem.id === action.payload.id
                )
            if(state.cartItems[itemIndex].cartQuantity >= 1){
                state.cartItems[itemIndex].cartQuantity += 1
            }
            localStorage.setItem('cartInfo',JSON.stringify(state.cartItems))
        },
        clearCart(state, action){
            state.cartItems = []
            toast.error('Cart is Empty',{
                position:'top-right'
            })
            localStorage.setItem('cartInfo',JSON.stringify(state.cartItems))
        },
        orderSuccessful(state, action){
            state.cartItems = []
            toast.success('You Ordered Successfully',{
                position:'top-right'
            })
            localStorage.setItem('cartInfo',JSON.stringify(state.cartItems))
        },
        cartItemValueTotal(state, action){
          let{total, quantity} =  state.cartItems.reduce((cartTotal,cartItem)=>{
                const {price, cartQuantity} = cartItem
                
                const itemTotal = price * cartQuantity

                cartTotal.total += itemTotal
                cartTotal.quantity +=cartQuantity
                return cartTotal
            },{
                total:0,
                quantity:0
            })
            
            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        }

    }
})

export const {addToCart,removeCartItem,decreaseCartItemNumbers,increaseCartItemNumbers,clearCart,cartItemValueTotal,orderSuccessful} = cartSlice.actions
export default cartSlice.reducer