export function formatCurrency(num) {
  return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}

export const sortedProducts = (filteredProducts, sort) => {
  const filteredProductsCopy = filteredProducts.slice();

  let result = filteredProductsCopy.sort((a, b) =>
    sort === "lowest"
      ? a.price > b.price
        ? 1
        : -1
      : sort === "highest"
      ? a.price < b.price
        ? 1
        : -1
      : a._id < b._id
      ? 1
      : -1
  );
  return result;
};

export const removeFromTheCart = (store, product) => {
  const cartItems = store.cart.cart
    .slice()
    .filter((item) => item._id !== product._id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return cartItems;
};

export const addToTheCart = (store, product) => {
  const cartItems = store.cart.cart.slice(); //items.slice();
  let alreadyInCart = false;
  cartItems.forEach((item) => {
    if (item._id === product._id) {
      item.count++;
      alreadyInCart = true;
    }
  });
  if (!alreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return cartItems;
};
