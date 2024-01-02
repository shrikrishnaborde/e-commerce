import { createSlice } from '@reduxjs/toolkit';
import {addToCart, removeItems} from '../utils/common'


const initialState= {
  cart :[],
}
 const cartSlice  = createSlice({
  name : "cartSlice",
  initialState,
  reducers : {
    cartData : (state,action) =>{
      state.cart  = addToCart(state,action)
     },

    clearItem : (state,action) =>{
      state.cart =  state?.cart.filter((card) => card.id  !== action.payload.itemId)
    },

    removeItem :(state,action)=>{
    state.cart = removeItems(state,action)
  }
  },
 })

export const {cartData, clearItem,removeItem} =  cartSlice.actions;

export default cartSlice.reducer
