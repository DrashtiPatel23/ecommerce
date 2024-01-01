import React, { useState,useEffect } from "react";
import Header from "./header";
import styles from "../css/productdetail.css";

const ProductDetail = () => {
  const product = {
    id: 1,
    name: "Headphone",
    pricing: 100,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    reviews: [
      {
        id: 1,
        user: "User1",
        photo: "user1.jpg",
        comment: "Great product!",
        rating: 5,
      },
      {
        id: 2,
        user: "User2",
        photo: "user2.jpg",
        comment: "Highly recommended.",
        rating: 4,
      },
    ],
  };

  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);

  useEffect(()=>{

  },[])

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Add your logic to handle adding the product to the cart
    console.log("Product added to cart:", product);
  };
  return (
    <>
      <Header />
      <div className="prodetail">
        <div className="protitle">
          <h1>Product Detail</h1>
        </div>
        <div className="productDetailContainer">
          <div className="productImage">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="productInfo">
            <h2>{product.name}</h2>
            <p className="productPrice">
              <b>Price:</b> ${product.pricing.toFixed(2)}
            </p>
            <p className="productDetails">{product.description}</p>

            <div className="quantityContainer">
              <label>Quantity:</label>
              <div className="quantityControl">
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
            </div>
            <button onClick={handleAddToCart} className="addToCartButton">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="reviewsContainer">
          <h2>Reviews</h2>
          <div className="review">
            <label>Your Rating:</label>
            <div className="starRating">
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  className={`star ${value <= rating ? "selectedStar" : ""}`}
                  onClick={() => setRating(value)}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <label>Your Review:</label>
            <textarea
              // value={review}
              // onChange={(e) => setReview(e.target.value)}
              className="reviewtxtarea"
              required
              rows={3}
            />

            <button type="submit" className="reviewbtn">
              Submit Review
            </button>
          </div>
          {/* </form> */}
          <ul>
            <ul>
              {product.reviews.map((r) => (
                <li key={r.id}>
                  <div className="reviewHeader">
                    <img
                      src="https://www.w3schools.com/html/img_girl.jpg"
                      alt="reviewuser"
                      className="userPhoto"
                    />
                    <div>
                      <strong>{r.user}</strong>
                      <div className="starRating">
                        {Array.from({ length: r.rating }, (_, index) => (
                          <span key={index} className="star selectedStar">
                            &#9733;
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className={styles.reviewMessage}>{r.comment}</p>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
