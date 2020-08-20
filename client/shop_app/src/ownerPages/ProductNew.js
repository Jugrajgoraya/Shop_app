import React, { useState } from "react";

import { Product } from "../api/product";
import { ProductForm } from "./components/ProductForm";

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

export const ProductNew = props => {
  const [errors, setErrors] = useState([]);

  const createProduct = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData();

    toBase64(currentTarget.image.files[0]).then(base64Image =>{ 
      fd.append('name', currentTarget.name.value )
      fd.append('description', currentTarget.description.value)
      
      const newProduct = {
        name: fd.get("name"),
        description: fd.get("description"),
        image: base64Image
      };
      return Product.create(newProduct)
    }).then(data => {
      if (data.errors) {
        setErrors(data.errors);
        console.log("errors: ", errors);
      } else {
        props.history.push(`/Products/${data.id}`);
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
