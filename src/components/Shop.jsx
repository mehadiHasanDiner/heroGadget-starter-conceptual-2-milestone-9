import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToCart } from "../utilities/fakeBD";

const Shop = () => {
  const productData = useLoaderData();

  const handleAddToCart = (id) => {
    addToCart(id);
  };
  return (
    <div className="product-container">
      {productData.map((product, i) => (
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
