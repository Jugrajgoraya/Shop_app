import React, { Component } from "react";
import { Header, Segment } from 'semantic-ui-react'

import { ProductDetails } from "../ownerPages/components/ProductDetails";
import { Product } from "../api/product";
import { Session } from '../api/session'
import { Spinner } from "../ownerPages/components/Spinner";

// const square = { width: 155, height: 150 }

export class ProductShow2 extends Component {
  constructor(props) {

    super(props);

    this.state = {
      product: null,
      isLoading: true,
    };
  }
  addInput(product){
      product.quantity = (Number(product.quantity)+1).toString() 
      this.setState({
        product
      })
  }

  removeInput(product){
    product.quantity = (Number(product.quantity)-1).toString() 
    this.setState({
      product
    })
  }

  addToCart(cliked_item){
    Session.createCart(cliked_item).then((data) => {
        console.log(data)
        this.props.history.push(`/cart`);
    })
  }

  componentDidMount() {
    Product.one(this.props.match.params.id).then((product) => {
      if(!product.quantity){
        product.quantity = 1
      }
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
            product={this.state.product} from="customer"
          />
          <div class="quantity">
            <button class="plus-btn" type="button" name="button" onClick={()=>this.addInput(this.state.product)}>
                  +
            </button>
            <input type="text" name="name" value={this.state.product.quantity}/>
            <button class="minus-btn" type="button" name="button" onClick={()=>this.removeInput(this.state.product)}>
                  -
            </button>
          </div>
          <button
            onClick={() => this.addToCart(this.state.product)}
            className="ui right floated huge green button"
          >
            Add to Cart
          </button>

        {/* <div>
            <Segment circular inverted style={square} onClick={() => this.addToCart(this.state.product)}>
                <Header as='h2' inverted>
                    Buy Now
                    <Header.Subheader>$10.99</Header.Subheader>
                </Header>
            </Segment>
        </div> */}
        </div>
      </main>
    );
  }
}
