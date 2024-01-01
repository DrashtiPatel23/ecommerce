import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let loginUserData = localStorage.getItem("userData");
    loginUserData = loginUserData
      ? JSON.parse(localStorage.getItem("userData"))
      : null;
    setIsLogin(loginUserData ? true : false);
  }, []);

  const signOut = () => {
    localStorage.removeItem("userData");
    setIsLogin(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand logo">
            SHOPPER
          </Link>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/product">
                Product
              </Link>
              <Link className="nav-link" to="/order-list">
                Order List
              </Link>
              {!isLogin ? (
                <Link className="nav-link" to="/login">
                  Login / Sign Up
                </Link>
              ) : (
                <Link className="nav-link" onClick={signOut}>
                  Logout
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
