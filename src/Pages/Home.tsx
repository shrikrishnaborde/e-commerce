import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCardItem from "../component/ProductCardItem";
import styled from "styled-components";
import Loader from "../component/Loader";
import { FixedSizeList } from "react-window";


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  console.log('height', window)
  return {
    width,
    height
  };
}

const FlexRow = styled.div<{itemsInRow}>`
  display: flex;
  justify-content:center;
  //justify-content: ${props => props.itemsInRow ===3 ? 'center': 'flex-start'};
`;

//custonm style for product card
const ProductItemWrapper = styled.div`
  display: grid;
  padding: 20px;
  justify-content: space-between;
  grid-gap: 3%;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  q @media (max-width: 992px) {
    grid-gap: 1%;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
`;

//Home Page Component
function Home() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setLoading] = useState(false);

// const renderRow = ({ index, style }) => (
//   <div style={{ ...style, display: "flex", alignItems: "center", borderBottom: "1px solid lightgrey" }}>
//     <span>{data[index]}</span>
//   </div>
// );

  const renderRow = ({ index, style }: { index: any; style: any }) => {
    let itemsInRow = Math.min(3,productData.length - (3*index));
    
    return(
    // <div style={{ ...style }}>
    //   <ProductCardItem productdata={productData[index]} />
    // </div>
    // <ProductItemWrapper>
    //   {productData.slice(index,2).map((data) => {
    //     return <ProductCardItem key={index} productdata={data} />;
    //   })}
    // </ProductItemWrapper>
    <div style={{ ...style }}>
      <FlexRow itemsInRow={itemsInRow}>
        {productData.slice(3*index, 3*index + 3).map((data,index1) => {
          return <ProductCardItem key={index1} productdata={data} />;
        })}
      </FlexRow>
    </div>
  )};

  useEffect(() => {
    setLoading(true);

    //Fetch Data from Backend API to get list of prodcuts
    axios("https://fakestoreapi.com/products").then((response) => {
      setProductData(response.data);
      console.log("products:", Math.floor(response.data.length / 3))
      setLoading(false);
    });
  }, []);

  return (
    <>
      {/* show loading wheel until we see list of products */}
      {isLoading && <Loader />}

      {/* Wrapper component for Product card styles */}
      {/* <ProductItemWrapper>
        <FixedSizeList
          height={400}
          width={300}
          itemCount={productData.length}
          itemSize={40} // Height of each row
        >
          {renderRow}
        </FixedSizeList>
      </ProductItemWrapper> */}

      <FixedSizeList
        height={window.innerHeight-100}
        itemCount={Math.ceil(productData.length / 3)}
        itemSize={400} // Height of each row
      >
        {renderRow} 
      </FixedSizeList>
    </>
  );
}

export default Home;
