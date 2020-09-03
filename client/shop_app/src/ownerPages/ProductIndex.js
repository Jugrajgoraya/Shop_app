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
    Product.destroy(id).then(res =>{
      this.props.history.push("/products")
      this.setState( {products: this.state.products.filter( product => product.id != id), isLoading:false})
    })
  }

  render() {
    console.log(this.state.products)
    if (this.state.isLoading) {
      return <Spinner message="Loading products from DB" />;
    }
    return (
      <main className="ProductIndex Page container">
        <h2 className="ui horizontal divider header">Products</h2>
        <ul className="ui list">
          <div className="">
          {this.state.products.map((product) => (
            <Link to={`/products/${product.id}`} >
              <div key={product.id} className="ui raised clearing segment">
                <h3 className="ui header">
                  {product.name}
                </h3>
                <img src= {product.image} height="100px" width="150px"/>
                <Link to={`/products/${product.id}/edit`}>
                  <button className="ui right floated small orange button">
                    Edit
                  </button>
                </Link>
                <button
                  className="ui right floated small red button"
                  onClick={() => this.deleteProduct(product.id)}
                >
                  Delete
                </button>
              </div>
            </Link>
          ))}
          </div>
        </ul>
      </main>
    );
  }
}

