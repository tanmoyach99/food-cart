import React from "react";
import Card from "../components/Card/Card";
import Cart from "../components/Cart";

const Menu = () => {
  return (
    <div className="row menu">
      <div className="col-md-8  offset-md-1">
        <Card />
      </div>
      <div className="col-md-3   ">
        <Cart />
      </div>
    </div>
  );
};

export default Menu;
