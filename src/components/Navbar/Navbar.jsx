import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo_white.svg";
import { EnvironmentOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand me-5" to="/">
          <img src={logo} alt="" className="img-fluid logo" />
        </Link>

        <div
          className="collapse navbar-collapse ms-5 d-flex justify-content-end "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item  ">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/"
              >
                <div className="form-check d-flex align-items-center justify-content-center ">
                  <label className="form-check-label d-flex align-items-center justify-content-center me-4">
                    <input
                      type="radio"
                      className="form-check-input me-2"
                      name=""
                      id=""
                      value="pick-up"
                    />
                    <h6 className="text-white">Delivery</h6>
                  </label>{" "}
                  <label className="form-check-label d-flex align-items-center justify-content-center ">
                    <input
                      type="radio"
                      className="form-check-input me-2"
                      name=""
                      id=""
                      value="pick-up"
                    />
                    <h6 className="text-white">PickUp</h6>
                  </label>
                </div>
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link text-white d-flex justify-content-end "
                to="/"
              >
                <EnvironmentOutlined className="text-white p-1" />
                <h6 className="text-white">Select Location</h6>
              </Link>
            </li>

            <li className="nav-item d-flex justify-content-end ">
              <Link className="nav-link text-white d-flex align-items-center justify-content-center">
                <Avatar
                  size={32}
                  icon={<UserOutlined className="text-white p-1" />}
                />{" "}
                <h6 className="text-white">User</h6>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
