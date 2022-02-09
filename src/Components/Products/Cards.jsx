import React from "react";
import './Cards.css'

export function Cards (props) {
    const {data}=props
    let {image, name, description, value}=data
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
            <button>-</button>
            <p>0</p> 
            <button>+</button>
            </span>
            </div> 
        </div>
    )
}