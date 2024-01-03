import styled from "styled-components";

//styles for Image inside product card
const ProdutImage = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 90%;
  }
`;

//wrapper component for Image and Information component
const ProdutImageWrapper = styled.div`
  display: flex;
`;

//styles for product information inside product card
const ProdutDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  p {
    margin: 0px 10px 5px;
  }
`;

//This compoennt is used to show image and Information(Name,Price) in Product card
function ProductItemInfo({ productdata }: any) {
  const { image, price, title } = productdata;

  return (
    //Wrapper styled component for Image and Information(Name,Price)
    <ProdutImageWrapper>
      {/* Wrapper component for image inside product card */}
      <ProdutImage>
        <img style={{ width: "50%" }} src={image} alt="img" />
      </ProdutImage>

      {/* Information component(Name,Price) inside product card */}
      <ProdutDescription>
        <p>{title}</p>
        <p>Rs. {price}</p>
      </ProdutDescription>

    </ProdutImageWrapper>
  );
}

export default ProductItemInfo;
