import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart, handleQuantityCart } from "../features/cartSlice";

const CartProduct = ({ food, handleRemove, handleDecrease, addToCart }) => {
  //   const [count, setCount] = useState(food.cartQuantity);
  const dispatch = useDispatch();

  const handleQuantity = (e, id) => {
    const foodDetails = {
      value: parseInt(e.target.value),
      id: food.id,
    };
    dispatch(handleQuantityCart(foodDetails));
    // setCount(food.cartQuantity);
  };
  return (
    <div className="p-1 m-1 single-item">
      <div className="row d-flex">
        <div className="col-md-4 img-cart ">
          <img src={food.img} alt="" className="img-fluid" />
        </div>
        <div className="col-md-8  name-cart">
          <h6> {food.name}</h6>
          <p className="text-secondary">{food.description}</p>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-md-6  d-flex">
          {food.cartQuantity <= 1 ? (
            <button className="btn btn-dark" onClick={() => handleRemove(food)}>
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

          <input
            type="number"
            value={food.cartQuantity}
            className="form-control"
            onChange={(e) => {
              handleQuantity(e);
            }}
            disabled={food.cartQuantity <= 0}
          />

          <button className="btn btn-dark" onClick={() => addToCart(food)}>
            +
          </button>
        </div>
        <div className="col-md-5  offset-md-1 d-flex justify-content-end">
          <h4 className="text-secondary ">
            {" "}
            $ {food.price * food.cartQuantity}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
