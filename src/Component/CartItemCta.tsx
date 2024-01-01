import React ,{useState} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import {removeItem ,cartData, clearItem} from '../slices/cartSlice'

const CartCtaContainer = styled.div`
margin:1rem;
display: flex;
justify-content: space-between;
button {
width:40%;
padding:20px;
background: black;
color: white;
font-weight: 600;
cursor: pointer;
transition: 0.3s;
border-radius:6px;
}

button:hover {
  font-size: 15px;
  background: white;
  color: black;

}

}
`;

const ActionWrapper = styled.div`
display : flex;
width:40%;

span {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
}`;

function CartItemCta({itemId, productdata ,qty}:any) {
    const dispatch = useDispatch()

const removeHandler = (itemId:number) =>{
    console.log("key",itemId);
    dispatch(clearItem({itemId}))

}


const addToCart =(productdata : any) =>{
    console.log("product",productdata)
    dispatch(cartData({...productdata, quantity :1}))
  }

  const removeToCart =(productdata : any) =>{
    dispatch(removeItem({...productdata, quantity :1}))
  }

  const cartItems = useSelector((state: any) => state.cartSlice.cart);
    console.log("xxxx",itemId)
  return (
    <CartCtaContainer >
       <button onClick = {()=>removeHandler(itemId)}>Remove</button>
       <ActionWrapper>
        <button onClick ={() =>removeToCart(productdata)}>-</button>
        <span>{qty}</span>
        <button onClick ={() =>addToCart(productdata)}>+</button>
       </ActionWrapper>
    </CartCtaContainer>
  )
}

export default CartItemCta



