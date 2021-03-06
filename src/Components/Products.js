import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { formatCurrency } from "../Helpers/index";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { useSelector } from "react-redux";

const Products = ({ getProducts, addToCart, filteredProducts }) => {
  const [product, setproduct] = useState(null);
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    getProducts();
  }, []);

  const openModal = (product) => {
    setproduct({ product });
  };
  const closeModal = () => {
    setproduct({ product: null });
  };

  return (
    <div>
      <Fade bottom cascade>
        {filteredProducts ? (
          <ul className="products flex justify-center items-center m-0 p-0 list-none flex-wrap">
            {filteredProducts.map((product) => (
              <li key={product._id}>
                <div className="product">
                  <a
                    href={"#" + product._id}
                    onClick={() => openModal(product)}
                  >
                    <img src={product.image} alt={product.title} />
                    <p className="pt-1 text-purple-500 font-semibold">
                      {product.title}
                    </p>
                  </a>
                  <div className="product-price">
                    <div className="font-bold text-3xl pl-12">
                      {formatCurrency(product.price)}
                    </div>
                    <button
                      className="button bt-primary"
                      onClick={() => addToCart(cart, product)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>Loading...</div>
        )}
      </Fade>
      {product && (
        <Modal
          isOpen={true}
          onRequestClose={this.closeModal}
          ariaHideApp={false}
        >
          <Zoom>
            <div>
              <button
                className="top-0 right-0 float-right cursor-pointer focus:outline-none"
                onClick={this.closeModal}
              >
                <span style={{ fontSize: "24px" }}>
                  <i className="fas fa-times"></i>
                </span>
              </button>
              <div className="product-details lg:flex">
                <img
                  src={product.image}
                  alt={product.title}
                  className="mx-auto"
                />
                <div className="product-details-description pt-6 lt:pt-0 lg:px-8">
                  <p className="text-center">
                    <strong>{product.title}</strong>
                  </p>
                  <p className="py-4">{product.description}</p>
                  <p className="font-semibold py-4">
                    Available Sizes:{" "}
                    {product.availableSizes.map((size, idx) => (
                      <span key={idx}>
                        {" "}
                        <button className="button">{size}</button>
                      </span>
                    ))}
                  </p>
                  <div className="product-price py-4">
                    <div className="font-bold text-4xl">
                      {formatCurrency(product.price)}
                    </div>
                    <button
                      className="button bt-primary"
                      onClick={() => {
                        addToCart(cart, product);
                        closeModal();
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
};

export default Products;
