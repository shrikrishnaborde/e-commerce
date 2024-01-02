import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import ProductCardItem from '../component/ProductCardItem';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Loader from '../component/Loader';

const ProductItemWrapper = styled.div`
  display: grid;
  padding: 20px;
  justify-content: space-between;
  grid-gap: 3%;
  grid-template-columns: repeat(auto-fill,minmax(30%,1fr));

  @media (max-width: 992px) {
    grid-gap: 1%;
    grid-template-columns: repeat(auto-fill,minmax(50%,1fr));
  }
`

function Home() {
  const [productData, setProductData] = useState([]);
  const [isLoading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    axios('https://fakestoreapi.com/products').then(response =>{
      setProductData(response.data)
      setLoading(false);
    })
  },[]);

  return (
    <>
      {isLoading &&  <Loader /> }
      <ProductItemWrapper>
        { productData.map(data=>{
          return (
            <ProductCardItem productdata = {data}/>
          )
        })}
      </ProductItemWrapper>
       
    </>
  )
}

export default Home