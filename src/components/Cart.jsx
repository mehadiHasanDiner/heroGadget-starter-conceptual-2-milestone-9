import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const { cartArr } = useLoaderData();
  console.log(cartArr);

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold"> {cartArr.length}</h2>
      </div>
    </div>
  );
};

export default Cart;
