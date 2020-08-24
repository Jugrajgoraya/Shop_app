import React, { Component } from "react";

import { Session } from "../api/session";
import { Spinner } from "../ownerPages/components/Spinner";

export class Cart extends Component {
  constructor(props) {

    super(props);
    this.state = {
      cart_items: [],
      isLoading: true,
    };
  }

  removeFromCart(){

  }

  componentDidMount() {
    Session.all().then((cart_items) => {
      this.setState({ cart_items, isLoading: false });
    });
  }

  render() {
    console.log(this.state.cart_items)
    if (this.state.isLoading) {
      return <Spinner message="Loading products from DB" />;
    }
    return (
      <main className="ProductIndex Page">
        <h2 className="ui horizontal divider header">Cart itmes</h2>
        <ul className="ui list">
          {this.state.cart_items.map((product) => (
              <div key={product.id} className="ui raised clearing segment">
                <h3 className="ui header">
                  {product.name}
                </h3>
                <img src= {product.image} height="100px" width="100px"/>
                <button
                  className="ui right floated small orange button"
                  onClick={() => this.removeFromCart(product.id)}
                >
                   Remove
                </button>
              </div>
          ))}
        </ul>
      </main>
    );
  }
}

