import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCart,
  decrease,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";
import banner from "../images/banner.jpg";

const Cart = () => {
  const { cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleRemove = (fd) => {
    dispatch(removeFromCart(fd));
  };
  const handleDecrease = (fd) => {
    dispatch(decrease(fd));
  };
  const addToCart = (fd) => {
    dispatch(addCart(fd));
  };

  return (
    <div className="cart-container">
      <img src={banner} alt="" className="img-fluid m-2 p-2" />
      <h2>your desired food</h2>
      <div>
        <div className="cart-items">
          {cart.cartItems.length <= 0 ? (
            "your cart is empty"
          ) : (
            <>
              {cart.cartItems.map((food) => (
                <div className="p-1 m-1 single-item">
                  <div className="row d-flex">
                    <div className="col-md-4 ">
                      <img src={food.img} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-8 col-xs-8 col-sm-8 col-xl-8">
                      <h6> {food.name}</h6>
                      <p className="text-secondary">{food.description}</p>
                    </div>
                  </div>
                  <div className="row d-flex">
                    <div className="col-md-4  d-flex">
                      {food.cartQuantity === 1 ? (
                        <button
                          className="btn btn-dark"
                          onClick={() => handleRemove(food)}
                        >
                          remove
                        </button>
                      ) : (
                        <button
                          className="btn btn-dark"
                          onClick={() => handleDecrease(food)}
                        >
                          -
                        </button>
                      )}
                      <p className="p-1">{food.cartQuantity}</p>
                      <button
                        className="btn btn-dark"
                        onClick={() => addToCart(food)}
                      >
                        +
                      </button>
                    </div>
                    <div className="col-md-7  offset-md-1 d-flex justify-content-end">
                      <h4 className="text-secondary ">
                        {" "}
                        $ {food.price * food.cartQuantity}
                      </h4>
                    </div>
                  </div>
                </div>
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
