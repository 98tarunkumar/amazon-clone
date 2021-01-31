import React from "react";
import "./Product.css";
import GradeIcon from "@material-ui/icons/Grade";
function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <GradeIcon className="star" />
            ))}
        </div>
      </div>
      <img src={image} alt="hola"></img>

      <button>Add to basket</button>
    </div>
  );
}

export default Product;
