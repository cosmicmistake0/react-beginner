import { Routes, Route } from "react-router";
import { TrackingPage } from "./Pages/TrackingPage";
import { useState, useEffect } from "react";
import axios from "axios";
import { OrdersPage } from "./Pages/OrdersPage";
import { HomePage } from "./Pages/HomePage";
import { CheckoutPage } from "./Pages/CheckoutPage";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    (axios.get("  /api/cart-items").then((response) => {
      setCart(response.data);
    }),
      []);
  });

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
