import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import {NavLink} from 'react-router-dom'
// import cup from "../cup.png";
import styled from "styled-components";

// const NavBar = styled.nav`
//   display: flex;
//   justify-content: space-around;
//   margin-bottom: 20px;
//   padding-bottom: 20px;
//   border-bottom: 1px solid silver;

//   .active {
//   padding: 10px;
//   background-color: yellow;
//   color: black;
// }
// `;


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      {/* <img className ='img-class' src={cup} /> */}
    

        <NavLink to='/'  activeClassName="active">Mini - Shop</NavLink>
        <NavLink to='/merchants'  activeClassName="active">Merchants</NavLink>
        <NavLink to='/products'  activeClassName="active">All Products</NavLink>
        <NavLink to='/products/services'  activeClassName="active">Service</NavLink>
        <NavLink to='/products/retail'  activeClassName="active">Retail</NavLink>
        <NavLink to='/products/wholesale'  activeClassName="active">Wholesale</NavLink>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
          />
      </div>
         
    </nav>
  );
};

export default Navbar;
