import React from "react";

export const ProductDetails = (props) => {
  let { name, price, description, stock, weight, image, created_at } = props.product;
  const {from} = props
  if(from == "customer") {
    stock = "available"
  }

  return (
    <div className="ProductDetails">
        <h1>{name}</h1>
        <button className="ui huge blue circular button"><h1>{price} $</h1></button>
        <br/>
        <img src={image} height="500px" width="500px"/>
        <h2>{weight} gm</h2>
        <p>
          {description}
        </p>
        <h3>Stock Availablity:  {stock} </h3>
        <p>
          <small>
            Created at {created_at.toLocaleString()} 
          </small>
        </p>
    </div>
  );
};