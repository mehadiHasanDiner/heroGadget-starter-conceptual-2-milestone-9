const addToCart = (id) => {
  let shoppingCart = {};
  //   get the previous shopping cart
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  // add quantity to shopping cart
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  //   set the shopping cart
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// এখানে শুধু লোকাল স্টোরেজ থেকে খোসা বা প্যাকেট টা নিছে, বাকি কাজ করা হবে কার্ট কম্পোনেনেট
const getStoredCart = () => {
  let shoppingCart = {};
  //   get the previous shopping cart
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

// remove a specific element from local storage.
const removeFromCart = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

// delete full cart from the local storage
const deleteCartFromDb = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToCart, getStoredCart, removeFromCart, deleteCartFromDb };
