import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo_white.svg";

const Nav = () => {
  return (
    <nav className="main-navbar d-flex navbar">
      <div className="logo-img ms-3">
        <img src={logo} alt="" className="img-fluid" />
      </div>
      <div className="">
        <ul className=" nav-container collapse navbar-collapse   d-flex justify-content-end  me-auto text-white">
          <li className="nav-options">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-options">
            <Link className="nav-link" to="/">
              Delivery
            </Link>
          </li>
          <li className="nav-options">
            <Link className="nav-link" to="/">
              pickup
            </Link>
          </li>
          <li className="nav-options ">
            <Link className="nav-link" to="/">
              User Location
            </Link>
          </li>
          <li className="nav-options">
            <Link className="nav-link" to="/">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
