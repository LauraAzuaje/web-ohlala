import { useContext, useState } from "react";
import { Cards } from "../Products/Cards";
import CartContext from "../../Contexts/CartContext";
import './ShoppingCart.css';

export const ShoppingCart = () => {
  const [state] = useContext(CartContext);
  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")

  const getTotal = () => {
    let total = 0;
    state?.cart?.map((val) => {

      for(let i = 0; i < val.Quantity; i++) {
        const product = state.products.find((item) => item.id === val.id)
        total += product.value;
      }
      return val
    })
    return total;
  }

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
        <p>Total=$ {getTotal()}</p>
        <input 
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
          placeholder="Nombre"
        />
        <input 
          onChange={(e) => setDireccion(e.target.value)}
          value={direccion}
          placeholder="Dirección"
        />
        <button onClick={() => {
          const pedido = state?.cart?.map((val) => {
            const product = state.products.find((item) => item.id === val.id)
            return `${val?.Quantity} ${product?.name} ${product?.description}`
          })

          const text = encodeURI(`Hola, mi nombre es ${nombre}, dirección: ${direccion} y mi pedido es: ${pedido.join()}`)

          const whatsappUrl = `https://wa.me/573128206815?text=${text}`
          window.open(whatsappUrl, '_blank');

        }} className="buttonBuy">Realizar pedido</button>
      </div>
      
    </>
  );
};
