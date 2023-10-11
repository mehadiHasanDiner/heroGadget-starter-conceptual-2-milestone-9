import React from "react";
import { getStoredCart } from "../utilities/fakeBD";

const Cart = () => {
  const cart = getStoredCart();
  console.log(cart);
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
