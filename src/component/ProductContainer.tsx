import { ProductItemWrapper } from '../styles/globalStyle';

//Common styles component for any type of card(Product in main page/cart)
function ProductItem({children}:any) {
  return (
    <ProductItemWrapper >
      {children}
    </ProductItemWrapper>

  )
}

export default ProductItem