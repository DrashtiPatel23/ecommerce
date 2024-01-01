import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/page.css";
import "./css/signup.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { useEffect, useState } from "react";
import Product from "./pages/product";
import ProductDetail from "./pages/productdetail"
import OrderDetail from "./pages/order-list"
function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let loginUserData = localStorage.getItem("userData");
    loginUserData = loginUserData
      ? JSON.parse(localStorage.getItem("userData"))
      : null;
    setIsLogin(loginUserData ? true : false);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product" exact element={<Product />} />
        <Route path="/product-detail/:id" exact element={<ProductDetail />} />
        <Route path="/order-list" exact element={<OrderDetail />} />

        {!isLogin && (
          <>
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
          </>
        )}
        <Route path="*" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
