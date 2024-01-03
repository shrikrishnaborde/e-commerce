import { createSlice } from '@reduxjs/toolkit';
import {addToCart, removeItems} from '../../utils/common'

//redux store initial state
const initialState= {
  cart :[],
}
 const cartSlice  = createSlice({
  name : "cartSlice",
  initialState,
  reducers : {
    //increase quantity of item in cart
    addItemToCart : (state,action) =>{
      state.cart  = addToCart(state,action)
     },

     //remove item from cart
    clearItemFromCart : (state,action) =>{
      state.cart =  state?.cart.filter((card) => card.id  !== action.payload.itemId)
    },

    //decrease quantity of item in cart
    removeItemFromCart :(state,action)=>{
    state.cart = removeItems(state,action)
  }
  },
 })

export const {addItemToCart, clearItemFromCart,removeItemFromCart} =  cartSlice.actions;

export default cartSlice.reducer
