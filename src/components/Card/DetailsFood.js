import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease } from "../../features/cartSlice";

const DetailsFood = ({ food, addToCart }) => {
  const { cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch;
  const clickedFood = cart.cartItems.findIndex((item) => item.id === food.id);
  const decreaseCart = (fd) => dispatch(decrease(fd));

  console.log();

  return (
    <div className="col-md-3  card-container" key={food.id}>
      <div className="img-container">
        <img src={food.img} alt="" className="img-fluid card-img" />
        <div className="price-text">
          <h4 className="text-white">$ {food.price} </h4>
        </div>
      </div>
      <div className="description">
        <h6 className="title">{food.name} </h6>
        <p className="text-secondary">{food.description}</p>
      </div>
      <div className="row">
        <div className="d-flex justify-content-end">
          {!cart.cartItems[clickedFood] ? (
            <button
              className="btn btn-success "
              onClick={() => {
                addToCart(food);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <div className="d-flex">
              <button
                className="btn btn-success"
                onClick={() => decreaseCart(food)}
              >
                -
              </button>{" "}
              <p className="p-1 m-1">
                {cart.cartItems[clickedFood].cartQuantity}
              </p>{" "}
              <button
                className="btn btn-primary"
                onClick={() => addToCart(food)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsFood;
