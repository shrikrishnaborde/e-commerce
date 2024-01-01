import { createSlice,current } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState= {
  cart :[],
}
 const cartSlice  = createSlice({
  name : "cartSlice",
  initialState,
  reducers : {
    cartData : (state,action) =>{
        const itemExist = state.cart.find(item=>item.id === action.payload.id)
        if(itemExist){
          state.cart =   state.cart.map(item =>item.id ===  action.payload.id ? {...item,quantity:item.quantity+1}:item
            )
        } else {
          state.cart =  [...state.cart,{...action.payload,quantity:1}]
        }
     },

    clearItem : (state,action) =>{
      state.cart =  state?.cart.filter((card) => card.id  !== action.payload.itemId)
    },

    removeItem :(state,action)=>{
      const itemExist = state.cart.find(item=>item.id === action.payload.id)

      if(itemExist.quantity === 1){
        state.cart =  state?.cart.filter((card) => card.id  !== action.payload.id)
      } else {
        state.cart =   state.cart.map(item =>item.id ===  action.payload.id ? {...item,quantity:item.quantity-1}:item)
    }
  }
  },
 })

// Action creators are generated for each case reducer function

export const {cartData, clearItem,removeItem} =  cartSlice.actions;

export default cartSlice.reducer
