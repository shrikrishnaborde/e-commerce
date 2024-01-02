import ProductContainer from './ProductContainer';
import ProductItemInfo from './ProductItemInfo';
import ProductItemCta from './ProductItemCta';

function ProductCardItem({productdata} : any) {

  return (
    <ProductContainer>
      <ProductItemInfo productdata ={productdata} />
      <ProductItemCta productdata ={productdata} />
    </ProductContainer>
  )
}

export default ProductCardItem
