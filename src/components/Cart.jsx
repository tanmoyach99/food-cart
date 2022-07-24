import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  addCart,
  decrease,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";

import banner from "../images/banner.jpg";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { cart } = useSelector((state) => ({ ...state }));
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  console.log(cart);

  const handleRemove = (fd) => {
    dispatch(removeFromCart(fd));
  };
  const handleDecrease = (fd) => {
    dispatch(decrease(fd));
  };
  const addToCart = (fd) => {
    dispatch(addCart(fd));
  };

  const handleQuantity = (e) => {
    console.log(e.target.value);
    // let counts = e.target.value < 1 ? 1 : e.target.value;
    // if (counts > cart.cartQuantity) {
    //   return;
    // }

    // if (typeof window !== undefined) {
    //   if (localStorage.getItem("cart")) {
    //     cart = JSON.parse(localStorage.getItem("cart"));
    //   }
    //   cart.map((p, i) => {
    //     if (p._id === id) {
    //       cart[i].count = counts;
    //     }
    //   });
    //   console.log("cart update color", cart);
    //   localStorage.setItem("cart", JSON.stringify(cart));
    //   dispatch(addToCart(fd));
    // }
  };

  return (
    <div className="cart-container">
      <img src={banner} alt="" className="img-fluid img-banner m-2 p-2" />
      <h2>your desired food</h2>
      <div>
        <div className="cart-items">
          {cart.cartItems.length <= 0 ? (
            "your cart is empty"
          ) : (
            <>
              {cart.cartItems.map((food) => (
                <CartProduct
                  food={food}
                  handleRemove={handleRemove}
                  handleDecrease={handleDecrease}
                  addToCart={addToCart}
                />
              ))}
            </>
          )}
        </div>
        <div className="sub-total">
          <h3>SubTotal: {cart.cartTotalAmount} </h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
