import { Link, useLoaderData } from "react-router-dom";
import CartItem from "./Cards/CartItem";
import { deleteCartFromDb, removeFromCart } from "../utilities/fakeBD";
import { useContext } from "react";
import { CartContext } from "../App";
import toast from "react-hot-toast";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  // console.log(cart);

  const handleRemoveCart = (id) => {
    const remaining = cart.filter((c) => c.id !== id);
    setCart(remaining);
    removeFromCart(id);
    toast.error("Product Removed! 🔥");
  };

  let total = 0;
  if (cart.length > 0) {
    for (const product of cart) {
      total = total + product.price * product.quantity;
    }
  }

  // place order
  const handleOrderPlace = () => {
    if (cart.length > 0) {
      setCart([]);
      deleteCartFromDb();
      return toast.success("Order Placed! 😊");
    }
    return toast.error("Cart is empty! 🔥");
  };

  // clear cart
  // delete shopping cart
  const handleClearCart = () => {
    if (cart.length > 0) {
      setCart([]);
      deleteCartFromDb();
      return toast.success("All items remove! 😊");
    }
    return toast.error("Cart is empty! 🔥");
  };

  return (
    <>
      <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
          <h2 className="text-xl font-semibold">
            {" "}
            {cart.length ? "Review Cart Items" : "Cart is Empty"}
          </h2>
          <ul className="flex flex-col divide-y divide-gray-700">
            {cart.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                handleRemoveCart={handleRemoveCart}
              ></CartItem>
            ))}
          </ul>
          <div className="space-y-1 text-right">
            <p>
              Total amount: <span className="font-semibold">{total}$</span>
            </p>
            <p className="text-sm text-gray-400">
              Not including taxes and shipping costs
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            {cart.length > 0 ? (
              <button onClick={handleClearCart} className="btn-outlined">
                Clear Cart
              </button>
            ) : (
              <Link to="/shop">
                <button className="btn-outlined">Back To Shop</button>
              </Link>
            )}
            <button onClick={handleOrderPlace} className="btn-primary">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
