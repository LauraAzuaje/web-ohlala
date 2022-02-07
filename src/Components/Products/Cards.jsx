import React from "react";
import './Cards.css'

export function Cards (props) {
    const {image, name, description, value}=props
    return (
        <div className="productCard">
            <div className="productImage">
                <img src= {image} alt={'image '+name} />
                </div>
        <div className="productInfo">
            <h6>{name}</h6>
            <p>{description}</p>
            <p>{value}</p>

        </div>
        </div>
    )
}