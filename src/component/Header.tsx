import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Title = styled.div`
  margin-left:20px;
 font-size:20px;`;

const NavBar = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  align-items:center;
  padding:10px;
  height: 70px;
  background: black;
  display:flex;
  color: white;
`;

const NavBarWrapper = styled.div`
  margin-right: 3%;
  display:flex;
  margin-left: auto;
  align-items: center;

  span {
    margin-left: 20px;
  }
`;
const IconWrapper = styled.div`
cursor: pointer`;

function Header() {
  const navigate = useNavigate();
  const cartItems = useSelector((state: any) => state.cartSlice.cart);
  return (
    <>
      <NavBar>
        <Title>TechVerito</Title>
      <NavBarWrapper>
        <IconWrapper>
          <HomeIcon onClick = {()=>navigate('/')}  sx={{ fontSize: 30 }} /> 
        </IconWrapper>

        <Badge badgeContent={cartItems.length} onClick = {()=>navigate('/Cart')} font-size ={30} color="primary">
          <IconWrapper> 
            <ShoppingCartIcon />      
          </IconWrapper>
        </Badge>
      </NavBarWrapper>
      </NavBar>
    </>
 
  )
}

export default Header
