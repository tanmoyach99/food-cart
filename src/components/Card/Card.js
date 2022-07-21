import React, { useState } from "react";
import "./card.css";
import { data } from "../../data";
import DetailsFood from "./DetailsFood";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { addCart } from "../../features/cartSlice";

const Card = () => {
  const [food, setFood] = useState(data);
  const dispatch = useDispatch();

  const addToCart = (fd) => {
    console.log(fd);
    dispatch(addCart(fd));
  };

  return (
    <div className="row food-card-container">
      {food.map((food) => (
        <DetailsFood className="row" food={food} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Card;
