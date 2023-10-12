import { getStoredCart } from "../utilities/fakeBD";

const productAndCartData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const savedCart = getStoredCart();
  let cartArr = [];
  for (const id in savedCart) {
    const foundProduct = products.find((pd) => pd.id === id);
    cartArr.push(foundProduct);
    if (foundProduct) {
      const quantity = savedCart[id];
      foundProduct.quantity = quantity;
      cartArr.push(foundProduct);
    }
  }
  return { cartArr, products };
};

export { productAndCartData };
