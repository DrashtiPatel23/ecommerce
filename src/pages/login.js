import React, { useState } from "react";
import axios from "axios";
import { Routes } from "../constants/api_url";
import { Link, useNavigate } from "react-router-dom";
import Header from "./header";

const Login = () => {
  const navigate = useNavigate();
  const [userdata, setUserDatastate] = useState({
    email: "",
    password: "",
  });

  const changeuserdata = (e) => {
    setUserDatastate({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const response = await axios.post(Routes.API_URL + Routes.LOGIN, userdata, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const responseData = response.data;
    if (responseData && responseData.status === "success") {
      localStorage.setItem("userData", JSON.stringify(responseData.data));
      navigate("/home");
    }
  };
  return (
    <>
      <Header />
      <div className="container-form">
        <section className="login-section">
          <h2>Login</h2>
          <div>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={changeuserdata}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={changeuserdata}
            />
            <button type="button" onClick={handleSubmit}>
              Login
            </button>
            <div className="registration-link">
              <Link to="/signup">Register Now</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
