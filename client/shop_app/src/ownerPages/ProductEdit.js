import React, { useState, useEffect } from "react";

import { Product } from "../api/product";
// import { FormErrors } from "../FormErrors";
import { Spinner } from "./components/Spinner";
import { ProductForm } from "./components/ProductForm";

export const ProductEdit = props => {
  const [errors, setErrors] = useState([]);
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const updateProduct = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);
    const Id = props.match.params.id

    Product.update(Id, fd).then(data => {
      console.log(data)
      if (data.errors) {
        setErrors(data.errors);
      } else {
        props.history.push(`/products/${Id}`);
      }
    });
  };

  useEffect(() => {
    Product.one(props.match.params.id).then(product => {
      setProduct(product);
      setIsLoading(false);
    });
  }, [props.match.params.id]);

  if (isLoading) {
    return <Spinner message="Product doesn't exist to edit" />;
  }

  return (
    <ProductForm
      errors={errors}
      onUpdateProduct={updateProduct}
      buttonMessage="Update Product"
      Product={product}
    />
  );
};