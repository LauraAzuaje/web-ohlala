import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './Components/Home/Home';
import { ProductsList } from './Components/Products/Products';
import { Header } from './Components/Header/Header';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Services } from './Components/Services/Services';
import { NavBar } from './Components/NavBar/NavBar';
import {ShoppingCart} from './Components/ShoppingCart/ShoppingCart'

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Header/>}>
      <Route path='/' element={<Home/>}/>
     
      <Route path='/' element={<NavBar/>}>
      <Route path='/DonasyBombas' element={<ProductsList/>}/>
      <Route path='/DonasyBombas' element={<ProductsList/>}/>
      <Route path='/Roscas' element={<ProductsList/>}/>
      <Route path='/Encargos' element={<ProductsList/>}/>
      <Route path='/shoppingCart' element={<ShoppingCart />} />
      
      </Route>

      <Route path='/services' element={<Services />} />
      <Route path='*' element={<Navigate replace to='/'/>}/>
      <Route path='/shoppingCart' element={<ShoppingCart />} />
      
     
      </Route>
   </Routes>
  </HashRouter>,
  document.getElementById('root')
);
