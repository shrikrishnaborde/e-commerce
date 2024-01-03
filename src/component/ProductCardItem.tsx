import ProductContainer from './ProductContainer';
import ProductItemInfo from './ProductItemInfo';
import ProductItemCta from './ProductItemCta';

function ProductCardItem({productdata} : any) {

  return (
    //Common styles component for any type of card(Product in main page/cart)
    <ProductContainer>
      {/* display product image and general information */}
      <ProductItemInfo productdata ={productdata} />
      {/* display product description and add to cart option */}
      <ProductItemCta productdata ={productdata} />
    </ProductContainer>
  )
}

export default ProductCardItem
