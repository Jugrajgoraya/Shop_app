import React from "react";

// import { FormErrors } from "./FormErrors";

export const ProductForm = (props) => {
  let handleChange;
  if (props.onUpdateProduct) {
    handleChange = props.onUpdateProduct;
  } else {
    handleChange = props.onCreateProduct;
  }

  let updateProduct = { name: "", description: "" };
  let ProductPlaceholder = { ...updateProduct };

  if (props.Product) {
    updateProduct = {
      name: props.Product.name,
      description: props.Product.description
    };
  } else {
    ProductPlaceholder = {
      name: "Enter Product name",
      description: "Enter Product description"
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
      <button className="ui right floated large orange button" type="submit">
        {props.buttonMessage}
      </button>
    </form>
  );
};
