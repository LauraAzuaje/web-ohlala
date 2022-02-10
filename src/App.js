import React, { useReducer } from "react";
import { Home } from "./Components/Home/Home";
import { ProductsList } from "./Components/Products/Products";
import { Header } from "./Components/Header/Header";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Services } from "./Components/Services/Services";
import { NavBar } from "./Components/NavBar/NavBar";
import { ShoppingCart } from "./Components/ShoppingCart/ShoppingCart";
import CartContext from "./Contexts/CartContext";
import {
  ShoppingInitialState,
  ShoppingReducer,
} from "./Components/ShoppingCart/ShoppingReducers";

const App = () => {
  const [state, dispatch] = useReducer(ShoppingReducer, ShoppingInitialState);

  return (
    <HashRouter>
      <CartContext.Provider value={[ state, dispatch ]}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Home />} />

            <Route path="/" element={<NavBar />}>
              <Route path="/DonasyBombas" element={<ProductsList />} />
              <Route path="/DonasyBombas" element={<ProductsList />} />
              <Route path="/Roscas" element={<ProductsList />} />
              <Route path="/Encargos" element={<ProductsList />} />
              <Route path="/shoppingCart" element={<ShoppingCart />} />
            </Route>

            <Route path="/services" element={<Services />} />
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
          </Route>
        </Routes>
      </CartContext.Provider>
    </HashRouter>
  );
};

export default App;