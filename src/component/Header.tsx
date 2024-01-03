import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

//Styles for company name inside navbar
const Title = styled.div`
  margin-left: 20px;
  font-size: 20px;
`;

//Styles for navbar
const NavBar = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  align-items: center;
  z-index: 100;
  padding: 10px;
  height: 70px;
  background: black;
  display: flex;
  color: white;
`;

// styles for icons inside navbar
const NavBarIconsWrapper = styled.div`
  margin-right: 3%;
  display: flex;
  margin-left: auto;
  align-items: center;

  span {
    margin-left: 20px;
  }
`;

// styles for icons
const IconWrapper = styled.div`
  cursor: pointer;
`;

//Header bar of Application
function Header() {
  const navigate = useNavigate();

  //pull list of cart items from redux store to get number of items in cart
  const cartItems = useSelector((state: any) => state.cartSlice.cart);

  return (
    <>
      <NavBar>
        {/* Name of the company */}
        <Title>TechVerito</Title>

        {/* Home and cart icons wrapper */}
        <NavBarIconsWrapper>
          <IconWrapper>
            {/* Home Icon */}
            <HomeIcon onClick={() => navigate("/")} sx={{ fontSize: 30 }} />
          </IconWrapper>

          {/* Badge component to shoe number of products in cart */}
          <Badge
            badgeContent={cartItems.length}
            onClick={() => navigate("/Cart")}
            font-size={30}
            color="primary"
          >
            <IconWrapper>
              {/* Cart icon */}
              <ShoppingCartIcon />
            </IconWrapper>
          </Badge>
        </NavBarIconsWrapper>
      </NavBar>
    </>
  );
}

export default Header;
