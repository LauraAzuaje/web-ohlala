import React from 'react';
import './Products.css';
import { Categories } from './Data/Categories';
import { Cards } from './Cards';


export const ProductsList = () => {
  const url = window.location.href.split('/').reverse()[0]
  const products = Categories[url]
  


  return (
    <div className="containerCards">
      {products.products.map((products) => (
        <Cards key={products.id} data={products} />
      ))}
    </div>
  );
};


