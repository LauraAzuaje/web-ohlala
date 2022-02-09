import { useReducer } from "react"
import { Cards } from "../Products/Cards";
import { ShoppingInitialState, ShoppingReducer } from "./ShoppingReducers"


export const ShoppingCart = () => {
    const [state, dispatch] = useReducer( ShoppingReducer, ShoppingInitialState);
    const {products, cart} = state;



    const addToCart = (id) => {
        console.log(id);
    }

    const delfromcart = () => {}
    const clearcart = () => {}
    return (
        <div>
        <h2>Carrito de compras</h2>
        <h3>Productos</h3>
        <article className="Box"></article>
        {cart.map((product) => (<Cards key={product.id} data={products.find(item => item.id === product.id )} addToCart={addToCart}/>))}
        <article className="Box"></article>
        </div>
    )
}