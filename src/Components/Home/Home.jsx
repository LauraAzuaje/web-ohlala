import React from 'react';
import './Home.css';
import banner1 from "../../images/banner1.jpg"
import banner2 from "../../images/banner2.jpg"
import banner3 from "../../images/banner3.jpg"
import banner4 from "../../images/banner4.jpg"


export const Home = () => {
    return (
    <>
    <body>   
    <div className='slider'>
        <ul>
            <li>
            <img src={banner1}  alt="" />
            </li>
            <li>
            <img src={banner2}  alt="" />
            </li>
            <li>
            <img src={banner3}  alt="" />
            </li>
            <li>
            <img src={banner4}  alt="" />
            </li>
        </ul>
    </div>

    <div className='presentation'>
        <h1>¿Quienes Somos?</h1>
        <p>Oh lala sweet factory, tienda de productos y servicios creada en el año 2015 en Cabimas Edo. Zulia Venezuela. 
Pastelería artesanal con varias sucursales en la ciudad, nuestro producto principal son la donas y entre los servicios que ofrecemos puedes encontrar talleres virtuales y presenciales de pastelería.
</p>
    </div>
    </body>
    </>
    )
  };