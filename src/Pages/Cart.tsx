import { useSelector } from 'react-redux';
import ProductItemInfo from '../component/ProductItemInfo';
import { ProductItemWrapper } from '../styles/globalStyle';
import styled from 'styled-components';
import CartCtaContainer from '../component/CartItemCta';

//styles for container of cart products
const CartProductItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
//styles for Information inside product card
const CartProductItem = styled(ProductItemWrapper)`
  padding:0px;
  margin:20px;
`

//Page to display Products inside cart
function Cart() {
  //fetched products inside cart from redux store
  const cartItems = useSelector((state: any) => state.cartSlice.cart);

  return cartItems?.length > 0 ?  (
    <CartProductItemContainer>
      {cartItems.map((data:any, index : number)=>{
        return (
          <CartProductItem> 
            {/* display prodct Inrmation(name, price) */}
            <ProductItemInfo productdata = {data} />
            {/* Actions on quntity of product  */}
            <CartCtaContainer productdata = {data} qty = {data.quantity} itemId = {data.id} />
          </CartProductItem>
        )
      })}
    </CartProductItemContainer>
  ) :  <div>Please add Items to the cart</div>//Show this message if cart is empty

}

export default Cart
