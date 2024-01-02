const isExist = (state,action)=>{
  return state.cart.find(item=>item.id === action.payload.id)
}

// adding items from cart.
export const addToCart = (state,action)=>{
  const itemExist = isExist(state,action);
    if(itemExist){
      return state.cart.map(item =>item.id ===  action.payload.id ? {...item,quantity:item.quantity+1}:item
        )
    } else {
       return [...state.cart,{...action.payload,quantity:1}]
    }
}

// removing items from cart.
export const removeItems = (state,action)=>{
  const itemExist = isExist(state,action);
    if(itemExist.quantity === 1){
      return state?.cart.filter((card) => card.id  !== action.payload.id)
    } else {
      return state.cart.map(item =>item.id ===  action.payload.id ? {...item,quantity:item.quantity-1}:item)
  }
}
