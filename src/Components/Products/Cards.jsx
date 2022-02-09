import React, { useState } from "react";
import './Cards.css'



export function Cards (props) {
    const {data}=props
    let {image, name, description, value}=data
    

    const [num, setNum] = useState (0)



    return (
        <div className="productCard">
            <div className="productImage">
                <img src= {image} alt={'image '+name} />
                </div>
        <div className="productInfo">
            <h6>{name}</h6>
            <p>{description}</p>
        </div>   
            <div className="pb">
            <p className="price"> $ {value}</p>
            <span className="button">
            <button onClick={() => setNum(num - 1)}>-</button>
            <p>{num}</p> 
            <button onClick={() => setNum(num + 1)}>+</button>
            </span>
            </div> 
            <button>Añadir a carrito</button>
        </div>
    )
}