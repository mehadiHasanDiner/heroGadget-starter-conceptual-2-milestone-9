import { Link, useLoaderData } from "react-router-dom";
import CartItem from "./Cards/CartItem";

const Cart = () => {
  const { cartArr } = useLoaderData();
  console.log(cartArr);

  let total = 0;
  if (cartArr.length > 0) {
    for (const product of cartArr) {
      total = total + product.price * product.quantity;
    }
  }

  return (
    <>
      <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
          <h2 className="text-xl font-semibold">
            {" "}
            {cartArr.length ? "Review Cart Items" : "Cart is Empty"}
          </h2>
          <ul className="flex flex-col divide-y divide-gray-700">
            {cartArr.map((product) => (
              <CartItem key={product.id} product={product}></CartItem>
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
            {cartArr.length > 0 ? (
              <button className="btn-outlined">Clear Cart</button>
            ) : (
              <Link to="/shop">
                <button className="btn-outlined">Back To Shop</button>
              </Link>
            )}
            <button className="btn-primary">Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
