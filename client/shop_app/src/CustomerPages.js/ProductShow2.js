import React, { Component } from "react";
import { Header, Segment } from 'semantic-ui-react'

import { ProductDetails } from "../ownerPages/components/ProductDetails";
import { Product } from "../api/product";
import { Session } from '../api/session'
import { Spinner } from "../ownerPages/components/Spinner";

const square = { width: 155, height: 150 }

export class ProductShow2 extends Component {
  constructor(props) {

    super(props);

    this.state = {
      product: null,
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
    Product.one(this.props.match.params.id).then((product) => {
      this.setState({
        product: product,
        isLoading: false,
      });
    });
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
          {/* <button
            onClick={() => this.addToCart(this.state.product)}
            className="ui right floated huge red button"
          >
            Add to Cart
          </button> */}

        <div>
            <Segment circular inverted style={square} onClick={() => this.addToCart(this.state.product)}>
                <Header as='h2' inverted>
                    Buy Now
                    <Header.Subheader>$10.99</Header.Subheader>
                </Header>
            </Segment>
        </div>
        </div>
      </main>
    );
  }
}
