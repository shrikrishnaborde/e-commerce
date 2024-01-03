import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeItemFromCart, addItemToCart, clearItemFromCart } from "../redux/slices/cartSlice";

//styles for cart actions
const CartCtaContainer = styled.div`
  margin:1rem;
  display: flex;
  justify-content: space-between;

  button {
    width:40%;
    padding:20px;
    background: var(--black);
    color: var(--white);
    height: 55px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    border-radius:6px;
  }

  button:hover {
    font-size: 15px;
    background: var(--white);
    color: var(--black);
  }
}
`;

//styles for increase,decrease buttons and quantity
const ActionWrapper = styled.div`
  display: flex;
  width: 40%;

  span {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// Component to display quantity and increase/descrease quantity and remove product
function CartItemCta({ itemId, productdata, qty }: any) {
  const dispatch = useDispatch();

  //function to remove item from cart
  const removeHandler = (itemId: number) => {
    dispatch(clearItemFromCart({ itemId }));
  };

  //function to increase quantity of product in cart
  const increaseQuantity = (productdata: any) => {
    dispatch(addItemToCart({ ...productdata, quantity: 1 }));
  };

  //function to decrease quantity of product in cart
  const decreaseQuantity = (productdata: any) => {
    dispatch(removeItemFromCart({ ...productdata, quantity: 1 }));
  };

  return (
    <CartCtaContainer>
      {/* button to remove product from cart */}
      <button onClick={() => removeHandler(itemId)}>Remove</button>
      <ActionWrapper>
        {/* button to decrease quantity of item in cart */}
        <button onClick={() => decreaseQuantity(productdata)}>-</button>
        {/* quantity of product */}
        <span>{qty}</span>
        {/* button to increase quantity of product in cart */}
        <button onClick={() => increaseQuantity(productdata)}>+</button>
      </ActionWrapper>
    </CartCtaContainer>
  );
}

export default CartItemCta;
