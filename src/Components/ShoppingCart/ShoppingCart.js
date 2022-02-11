import { useContext } from "react";
import { Cards } from "../Products/Cards";
import CartContext from "../../Contexts/CartContext";
import './ShoppingCart.css';

export const ShoppingCart = () => {
  const [state] = useContext(CartContext);
  


  return (
    <>
    <div className="shCart">
  
      {state?.cart?.map((product) => (
        <div className="Box" key={"div" + product.id}>
          <Cards
            key={product.id}
            data={state.products.find((item) => item.id === product.id)}
            Quantity={product.Quantity}
          />
        </div>
      ))}
 
    </div>
  <div className="total">
        <p>Total=$0</p>
    <button className="buttonBuy">Realizar pedido</button>
  </div>

    </>
  );
};
