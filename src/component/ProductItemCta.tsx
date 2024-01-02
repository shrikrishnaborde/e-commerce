import React ,{useState} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import {cartData } from '../slices/cartSlice'

const ProductInfo = styled.div`
  margin:1rem;
  display: flex;

  button {
    height: 55px;
    flex: 30%;
    background: black;
    color: white;
    justify-content: center;
    margin: auto;
    padding: 20px;
    display: flex;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 6px;
    align-items: center;
  }

  button:hover {
    font-size: 15px;
    background: white;
    color: black;

  }

}
`;

const Description = styled.div`
  margin-right:30px;
  display: flex;
  flex: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`




function ProductItemCta({productdata}:any) {
    const {description} = productdata;

    const dispatch = useDispatch()

    const addToCart =(productdata : any) =>{
        console.log("product",productdata)
        dispatch(cartData({...productdata, quantity :1}))
      }
  return (
    <ProductInfo>
        <Description>{description}</Description> 
        <button onClick ={() =>addToCart(productdata)}>Add to Cart</button>
    </ProductInfo>
  )
}

export default ProductItemCta