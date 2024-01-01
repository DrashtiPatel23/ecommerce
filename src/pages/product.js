import React from "react";
import Header from "./header";
import common from "../css/common.css"
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <>
      <Header />
      <section>
        <div className="productcard">
          <div className="productimage">
            <img src="product1.jpeg" />
          </div>
          <div className="productdetail">
            <h2 className="producttitle">Skateboard</h2>
            <p className="productprice">$36.50 each</p>
            <p className="productdescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <Link to="/product-detail/1">
          <button>Buy Now</button>
          </Link>
        </div>

        <div className="productcard">
          <div className="productimage">
            <img src="product3.jpeg" />
          </div>
          <div className="productdetail">
            <h2 className="producttitle">Gloves</h2>
            <p className="productprice">$7.95 each</p>
            <p className="productdescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <Link to="/product-detail/2">
          <button>Buy Now</button>
          </Link>
        </div>

        <div className="productcard">
          <div className="productimage">
            <img src="product2.jpeg" />
          </div>
          <div className="productdetail">
            <h2 className="producttitle">Conditioner</h2>
            <p className="productprice">$31.99 each</p>
            <p className="productdescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <Link to="/product-detail/3">
          <button>Buy Now</button>
          </Link>

        </div>
      </section>
    </>
  );
};

export default Product;
