import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Product } from "../api/product";
import { Spinner } from "../ownerPages/components/Spinner";
import { Session } from '../api/session'

export class ProductIndex2 extends Component {
  constructor(props) {

    super(props);
    this.state = {
      products: [],
      isLoading: true,
    };
  }

  addToCart(cliked_item){
    Session.createCart(cliked_item).then((data) => {
        console.log(data)
        this.props.history.push(`/cart`);
    })
  }

  componentDidMount() {
    Product.all().then((products) => {
      this.setState({ products, isLoading: false });
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
                  {product.name}
                </h3>
                <img src= {product.image} height="100px" width="100px"/>
                <Link to={`/products/${product.id}`} >
                    <button className="ui right floated small green button">More Datails </button>
                </Link>
                <button
                  className="ui right floated small orange button"
                  onClick={() => this.addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
          ))}
        </ul>
      </main>
    );
  }
}

