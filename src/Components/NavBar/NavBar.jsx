import React from 'react';
import './NavBar.css';
import logo from "../../images/logo.png"
import 'boxicons';
import { Link, Outlet } from 'react-router-dom';


export const NavBar = () => {
  return (
      <>
<header>
    <div className="menu1">
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
                <Link to='/DonasyBombas'>Donas y Bombas</Link>
                </li>
                <li>
                <Link to="/Roscas">Roscas</Link>
                </li>
                <li>
                <Link to="/Encargos">Encargos</Link>
                </li>

        </ul>
    <div className="cart">
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