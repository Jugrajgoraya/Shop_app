import React, { Component } from "react";

import { ProductDetails } from "./components/ProductDetails";
import { Product } from "../api/product";
import { Spinner } from "./components/Spinner";


export class ProductShow extends Component {
  constructor(props) {

    super(props);

    this.state = {
      product: null,
      isLoading: true,
    };
  }
  componentDidMount() {
    Product.one(this.props.match.params.id).then((product) => {
      this.setState({
        product: product,
        isLoading: false,
      });
    });
  }
  deleteProduct() {
    this.setState({ product: null });
  }


  render() {
    console.log(this.state.product)
    if (this.state.isLoading) {
      return <Spinner message="product doesn't exist" />;
    }
    return (
      <main className="ProductShowPage">
        <div className="ui teal clearing segment ">
          <ProductDetails
            {...this.state.product}
          />
          <button
            onClick={() => this.deleteProduct()}
            className="ui right floated huge red button"
          >
            Delete
          </button>
        </div>
      </main>
    );
  }
}
