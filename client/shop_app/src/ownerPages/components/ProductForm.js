import React from "react";

// import { FormErrors } from "./FormErrors";

export const ProductForm = (props) => {
  let handleChange;
  if (props.onUpdateProduct) {
    handleChange = props.onUpdateProduct;
  } else {
    handleChange = props.onCreateProduct;
  }

  let updateProduct = { name: "", description: "", price:"", weight:"", stock:"" };
  let ProductPlaceholder = { ...updateProduct };

  if (props.Product) {
    updateProduct = {
      name: props.Product.name,
      description: props.Product.description,
      price: props.Product.price,
      weight: props.Product.weight,
      stock: props.Product.stock
    };
  } else {
    ProductPlaceholder = {
      name: "Enter Product name",
      description: "Enter Product description",
      price: "Enter Product price",
      weight: "Enter Product weight",
      stock: "Enter Product current stock"
    };
  }
  return (
    <form
      className="ui large form clearing segment NewProductForm"
      onSubmit={event => handleChange(event)}
    >
      <div className="field">
        <label htmlFor="name">name</label>
        {/* <FormErrors errors={props.errors} forField="name" /> */}
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={updateProduct.name}
          placeholder={ProductPlaceholder.name}
        />
      </div>
      <div className="field">
        <label htmlFor="price">Price</label>
        {/* <FormErrors errors={props.errors} forField="name" /> */}
        <input
          type="number"
          name="price"
          id="price"
          defaultValue={updateProduct.price}
          placeholder={ProductPlaceholder.price}
        />
      </div>
      <div className="field">
        <label htmlFor="description">description</label>
        {/* <FormErrors errors={props.errors} forField="description" /> */}
        <textarea
          name="description"
          id="description"
          rows="3"
          defaultValue={updateProduct.description}
          placeholder={ProductPlaceholder.description}
        />
      </div>
      <div className="field">
        <label htmlFor="image">Image</label>
        <br />
        <input 
            type="file" 
            name="image" 
            id="image" 
            />
      </div>
      <div className="field">
        <label htmlFor="weight">Weight</label>
        {/* <FormErrors errors={props.errors} forField="name" /> */}
        <input
          type="text"
          name="weight"
          id="weight"
          defaultValue={updateProduct.weight}
          placeholder={ProductPlaceholder.weight}
        />
      </div>
      <div className="field">
        <label htmlFor="stock">Stock</label>
        {/* <FormErrors errors={props.errors} forField="name" /> */}
        <input
          type="text"
          name="stock"
          id="stock"
          defaultValue={updateProduct.stock}
          placeholder={ProductPlaceholder.stock}
        />
      </div>
      <button className="ui right floated large orange button" type="submit">
        {props.buttonMessage}
      </button>
    </form>
  );
};
