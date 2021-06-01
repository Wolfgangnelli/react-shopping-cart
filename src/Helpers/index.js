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
