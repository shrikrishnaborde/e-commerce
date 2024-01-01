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
align-items:center;
padding:10px;
height: 70px;
background: black;
display:flex;
color: white;`;

const NavBarWrapper = styled.div`
margin-right: 3%;
display:flex;
margin-left: auto;
align-items: center;
span {
  margin-left: 20px;
}`;

function Header() {
  const navigate = useNavigate();
  const cartItems = useSelector((state: any) => state.cartSlice.cart);
  return (
    <>

       <NavBar>
       <Title>TechVerito</Title>
       <NavBarWrapper>
        {/* <Link to="/">   <HomeIcon sx={{ fontSize: 30 }} />    </Link>  */}
      <HomeIcon onClick = {()=>navigate('/')}  sx={{ fontSize: 30 }} /> 

       <Link to="/Cart">
       <Badge badgeContent={cartItems.length} font-size ={20}color="primary">
            <ShoppingCartIcon />
        </Badge>
       </Link> 
       
          
       </NavBarWrapper>
  
       </NavBar>

    </>
 
  )
}

export default Header


{/* <Badge badgeContent={1} font-size ={20}color="primary" className={pathname === "/Cart" ? "active": "inactive"} 
component={Link} to="/Cart" >
      <ShoppingCartIcon />
  </Badge> */}