import React from 'react';
import './Header.css';
import logo from "../../images/logo.png"
import 'boxicons';
import { Link, Outlet } from 'react-router-dom';


export const Header = () => {
  return (
      <>
<header>
    <div className="menu">
    <box-icon color="white" size="lg" name="menu"></box-icon>
    </div>  
        <div className="logo">
            <img src={logo} width="150" alt="" />
        </div>
        <ul>
                <li>
                <Link to='/'>Inicio</Link>
                </li>
                <li>
                <Link to='/DonasyBombas'>Productos</Link>
                </li>
                <li>
                <Link to="/Services">Servicios</Link>
                </li>
        </ul>
    <div className="cart">
    <Link to="/shoppingCart">Cart</Link>
       <box-icon color="white" name="cart"></box-icon>
       <span className="item_total">0</span>
    </div>

</header>
<div className='hola'>
    <Outlet/>
</div>
</>
  )
};


