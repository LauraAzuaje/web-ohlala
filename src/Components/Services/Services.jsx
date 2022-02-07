import React from 'react';
import './Services.css';
import taller from "../../images/taller.jpg"



export const Services = () => {
  return (
  <>

  <div className='bannerTaller'>
    <img src={taller} alt="" />
  </div>
  
  <div className='taller'>
  <div className='tallerOnline'>
        <h1>Taller Online</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus optio beatae aliquam iusto repudiandae ex in ea, hic similique atque voluptates labore tempora illo quibusdam fugit reprehenderit minima delectus consectetur.
</p>
</div>

<div className='tallerPresencial'>
        <h1>Taller Presencial</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet necessitatibus odit consequuntur itaque aperiam cupiditate expedita nihil aut repellendus? Dolore officia voluptatem eligendi libero debitis mollitia eveniet eaque sit.
</p>
</div>
</div>
  </>
  )
};