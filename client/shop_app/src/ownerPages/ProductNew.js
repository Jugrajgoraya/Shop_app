import React, { useState } from "react";

import { Product } from "../api/product";
import { ProductForm } from "./components/ProductForm";

export const ProductNew = props => {
  const [errors, setErrors] = useState([]);

  const createProduct = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

      return Product.create(fd).then(data => {
      if (data.errors) {
        setErrors(data.errors);
        console.log("errors: ", errors);
      } else {
        props.history.push(`/products/${data.id}`);
      }
    });

    currentTarget.reset();
  };

  return (
    <ProductForm
      errors={errors}
      onCreateProduct={createProduct}
      buttonMessage="Create Product"
    />
  );
}
