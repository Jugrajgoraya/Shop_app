import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../App.css'

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
  
  addInput(product){
    let pds = this.state.products.map(p =>{
        if(p.id == product.id){ 
           p.quantity = (Number(p.quantity)+1).toString() 
        }
          return p
      })
      this.setState({
        products: pds
      })
  }

  removeInput(product){
    let pds = this.state.products.map(p =>{
        if(p.id == product.id){
          if(p.quantity > 1){
            p.quantity = (Number(p.quantity)-1).toString() 
          }
        }
          return p
      })
      this.setState({
        products: pds
      })
  }

  componentDidMount() {
    Product.all().then((products) => {
        products.map(product=>{
          if(!product.quantity){
            product.quantity = 1
          }
            return product
        })
      this.setState({ products, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner message="Loading products from DB" />;
    }
    return (
      <main className="ProductIndex Page">
        <h1 className="ui horizontal divider header">Products</h1>
        <ul className="products">
          {this.state.products.map((product) => (
              <div key={product.id} className="ui raised clearing segment blue">
                <h3 className="ui header">
                  {product.name}
                </h3>
                <img src= {product.image} height="100px" width="100px"/>
                <Link to={`/products/${product.id}`} >
                    <button className="ui right floated small green button">More Datails </button>
                </Link>
                <div class="quantity">
                  <button class="plus-btn" type="button" name="button" onClick={()=>this.addInput(product)}>
                        +
                  </button>
                  <input type="text" name="name" value={product.quantity}/>
                  <button class="minus-btn" type="button" name="button" onClick={()=>this.removeInput(product)}>
                        -
                  </button>
                </div>
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

