import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductContainer'

const ProdutImage = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width:100%;
    height:90%;
  }
`

const ProdutImageWrapper = styled.div`
  display : flex;
`
const ProdutDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  p {
    margin: 0px 10px 5px;
  }
`

function ProductItemInfo({productdata}:any) {

const {image,price,title} = productdata;

  return (
    <ProdutImageWrapper>
      <ProdutImage>
        <img style = {{width: '50%'}} src = {image} alt ="img" />
      </ProdutImage>

      <ProdutDescription>
        <p>{title}</p>
        <p>Rs. {price}</p>
      </ProdutDescription>
    </ProdutImageWrapper>
  )
}

export default ProductItemInfo