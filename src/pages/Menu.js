import React from "react";
import Card from "../components/Card/Card";
import Cart from "../components/Cart";

const Menu = () => {
  return (
    <div className="row menu p-1 m-1">
      <div className="col-md-7 col-lg-7  offset-md-1">
        <Card />
      </div>
      <div className="col-md-3 col-lg-3   ">
        <Cart />
      </div>
    </div>
  );
};

export default Menu;
