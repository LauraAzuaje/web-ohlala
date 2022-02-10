import { useEffect, useContext } from "react";
import { Cards } from "../Products/Cards";
import CartContext from "../../Contexts/CartContext";

export const ShoppingCart = () => {
  const [state, dispatch] = useContext(CartContext);
  console.log(state.cart.Quantity)
//   const { products, cart } = state;

  const delfromcart = () => {};
  const clearcart = () => {};
  return (
    <div className="ShCart">
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <article className="Box"></article>
      {state?.cart?.map((product) => (
        <div key={"div" + product.id}>
          <Cards
            key={product.id}
            data={state.products.find((item) => item.id === product.id)}
            Quantity={product.Quantity}
          />
        </div>
      ))}
      <article className="Box"></article>
    </div>
  );
};
