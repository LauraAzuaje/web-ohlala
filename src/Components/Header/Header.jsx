import React from 'react';
import './Header.css';
import logo from "../../images/logo.png"
import 'boxicons';
import { Link, Outlet } from 'react-router-dom';


export const Header = () => {
  return (
      <>
<header> 
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
        <Link to="/shoppingCart"><box-icon color="white" name="cart"></box-icon></Link>
        <span className="item_total">0</span>
    </div>

</header>
<div className='hola'>
    <Outlet/> 
</div>
<footer className='footer'>
        <p>Contactanos</p>
        <a href='https://www.instagram.com/ohlalasweet_'>
        <box-icon color="white" name='instagram' type='logo' ></box-icon></a> <a href='https://wa.me/573128206815?text='> <box-icon color="white" name='whatsapp' type='logo' ></box-icon></a>
       <p>Site By Laura Azuaje <a href='https://github.com/LauraAzuaje'><box-icon color="white" name='github' type='logo' ></box-icon></a></p> 
        </footer>
</>
  )
};


