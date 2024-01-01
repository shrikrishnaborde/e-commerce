import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem'

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
const ProductInfo = styled.div`
margin:1rem;
display: flex;

button {
flex: 30%;
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