import React from "react";
import { useSelector } from "react-redux";

const DetailsFood = ({ food, addToCart, decreaseCart }) => {
  const { cart } = useSelector((state) => ({ ...state }));

  const clickedFood = cart.cartItems.findIndex((item) => item.id === food.id);

  console.log();

  return (
    <div className="col-md-3 col-sm-10 card-container" key={food.id}>
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
