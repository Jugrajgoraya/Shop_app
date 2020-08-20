import React from "react";

export const ProductDetails = (props) => {
  const { name, price, description, image, created_at } = props;
  
  return (
    <div className="ProductDetails">
        <h2>{name}</h2>
        <button>{price} $</button>
        <br/>
        <img src={image}/>
        <p>
            {description}
        </p>
        <p>
        <small>
          Created at {created_at.toLocaleString()} 
        </small>
      </p>
    </div>
  );
};