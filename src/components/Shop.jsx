import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToCart } from "../utilities/fakeBD";
import { CartContext, ProductContext } from "../App";
import toast from "react-hot-toast";

const Shop = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);
  // console.log(products);

  // const productData = useLoaderData();

  const handleAddToCart = (product) => {
    // console.log(product);
    let newCart = [];
    const exists = cart.find((e) => e.id === product.id);

    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((e) => e.id !== product.id);
      console.log(rest);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToCart(product.id);
    toast.success("Product Added! 🛒", { autoClose: 500 });
  };
  // newCart = [...cart, product]; ...cart = আগেরটা; product = নতুনটা
  // newCart = [...rest, exists];  ...rest = আগেরটা; exists = নতুনটা

  return (
    <div className="product-container">
      {products.map((product, i) => (
        // <p key={i}>{i + 1 + ". " + product.name}</p>
        // <p key={i}>{product.name}</p>
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default Shop;
