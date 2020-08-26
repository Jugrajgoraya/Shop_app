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

  removeFromCart(clicked_item){
    Session.updateCart(clicked_item).then((cart_items) => {
       this.setState({ cart_items, isLoading: false });
    });
  }

  componentDidMount() {
    Session.allCartItems().then((cart_items) => {
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
        <div className="cartContainer ">
            <ul className="ui container grid">
            {this.state.cart_items.map((product) => (
                <div key={product.id} className="ui raised clearing segment">
                    <h3 className="ui header row">
                    {product.name}
                    </h3>
                    <img src= {product.image} className="ui mini right floated image"/>
                    <button
                    className="ui right floated small orange button"
                    onClick={() => this.removeFromCart(product)}
                    >
                    Remove
                    </button>
                </div>
            ))}
            </ul>
        </div>
        <button className="ui right floated small green button">Add more</button>
        <button className="ui right floated small orange button">Check Out</button>
      </main>
    );
  }
}

