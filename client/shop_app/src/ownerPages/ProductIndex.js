import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Product } from "../api/product";
import { Spinner } from "./components/Spinner";

export class ProductIndex extends Component {
  constructor(props) {

    super(props);
    this.state = {
      products: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    Product.all().then((products) => {
      this.setState({ products, isLoading: false });
      console.log(products)
    });
  }

  deleteProduct(id) {

    this.setState((state, props) => {
      return {
        products: state.products.filter((q) => q.id !== id),
      };
    });

  }
  render() {
    console.log(this.state.products)
    if (this.state.isLoading) {
      return <Spinner message="Loading products from DB" />;
    }
    return (
      <main className="ProductIndex Page">
        <h2 className="ui horizontal divider header">Products</h2>
        <ul className="ui list">
          {this.state.products.map((product) => (
            <div key={product.id} className="ui raised clearing segment">
              <h3 className="ui header">
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </h3>
              <button
                className="ui right floated small red button"
                onClick={() => this.deleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </main>
    );
  }
}

