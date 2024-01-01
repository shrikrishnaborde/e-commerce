import React ,{useState}from 'react'
import StarRatings from './StarRatings'
import styled from 'styled-components'
import {cartData } from '../slices/cartSlice'
import { useDispatch } from 'react-redux'

import ProductItem from '../Component/ProductItem';
import ProductItemInfo from '../Component/ProductItemInfo';
import ProductItemCta from '../Component/ProductItemCta';

// const ProductItem = styled.div`
//  display: flex;
//  padding: 20px;
//  flex-direction: column;
//  box-shadow: 0px 4px 13px -2px rgba(0,0,0,0.6);
//  -webkit-box-shadow: 0px 4px 13px -2px rgba(0,0,0,0.6);
//  -moz-box-shadow: 0px 4px 13px -2px rgba(0,0,0,0.6);
// `
// const ProdutImage = styled.div`
//   width: 300px;
//   height: 200px;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   img {
//     width:100%;
//     height:90%;
//   }
// `

// const ProdutImageWrapper = styled.div`
//   display : flex;
// `
// const ProdutDescription = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// font-weight: 500;

// p {
//   margin: 0px 10px 5px;
// }

// `
// const ProductInfo = styled.div`
// margin:1rem;
// display: flex;

// button {
// flex: 30%;
// background: black;
// color: white;
// font-weight: 600;
// cursor: pointer;
// transition: 0.3s;
// border-radius:6px;
// }

// button:hover {
//   font-size: 15px;
//   background: white;
//   color: black;

// }

// }
// `;

// const Description = styled.div`
// margin-right:30px;
// display: flex;
// flex: 60%;
// overflow: hidden;
// text-overflow: ellipsis;
// display: -webkit-box;
// -webkit-line-clamp: 3;
// -webkit-box-orient: vertical;
// `

function ProductCardItem({productdata} : any) {
    const [cartItem, setCartItem] = useState({});
    const {description,image,price,rating,title} = productdata;

    const dispatch = useDispatch()

    const addToCart =(productdata : any) =>{
      console.log("product",productdata)
      dispatch(cartData({...productdata}))
    }

    // const addToWishList =(productdata) =>{
    //   dispatch(wishListData({...productdata, quantity :1}))
    // }

  return (
    <ProductItem>
      <ProductItemInfo productdata ={productdata} />
      <ProductItemCta productdata ={productdata} />
    </ProductItem>
    // <ProductItem >
    //   <ProdutImageWrapper>
    //       <ProdutImage>
    //           <img style = {{width: '50%'}} src = {image} alt ="img" />
    //       </ProdutImage>

    //       <ProdutDescription>
    //           <p>{title}</p>
    //           <p>Rs. {price}</p>
    //       </ProdutDescription>
    //       </ProdutImageWrapper>
    //       <ProductInfo>
    //         <Description>{description}</Description> 
    //         <button onClick ={() =>addToCart(productdata)}>Add to Cart</button>
    //       </ProductInfo>
    // </ProductItem>

  )
}

export default ProductCardItem
