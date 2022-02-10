import React, { useState, useContext } from "react";
import { TYPES } from "../ShoppingCart/ShoppingAction";
import CartContext from "../../Contexts/CartContext";

import "./Cards.css";

export function Cards(props) {
  const { data, Quantity } = props;
  const [state, dispatch] = useContext(CartContext);

  let { image, name, description, value, id } = data;
  console.log(Quantity)
  const [num, setNum] = useState(state.cart.Quantity === undefined ? 0:state.cart.Quantity);


  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const removeOneFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };

  return (
    <div className="productCard">
      <div className="productImage">
        <img src={image} alt={"image " + name} />
      </div>
      <div className="productInfo">
        <h6>{name}</h6>
        <p>{description}</p>
      </div>
      <div className="pb">
        <p className="price"> $ {value}</p>
        <span className="button">
          <button onClick={() => {
            removeOneFromCart(id) 
            setNum(num - 1);
          }}
          >
            -
            </button>
          <p>{Quantity === undefined ? num:Quantity}</p>
          <button
            onClick={() => {
              addToCart(id)
              setNum(num + 1);
            }}
          >
            +
          </button>
        </span>
      </div>
    </div>
  );
}