import React, { Component } from "react";
import '../App.css'

import { Session } from "../api/session";
import { Spinner } from "../ownerPages/components/Spinner";
import { Order } from "../api/order";
import { OrderDetail } from './components.js/OrderDetails'

export class Cart extends Component {
  constructor(props) {

    super(props);
    this.state = {
      cart_items: [],
      subTotal: 0,
      dataForm: false,
      isLoading: true,
    };
    this.createOrder = this.createOrder.bind(this)
  }

  removeFromCart(clicked_item){
    Session.updateCart(clicked_item).then((cart_items) => {
      let subTotal = 0
      cart_items.map(item => {
        subTotal += Number(item.price) * Number(item.quantity)
      })
      this.setState({ cart_items, subTotal, isLoading: false });
    });
  }

  componentDidMount() {
    Session.allCartItems().then((cart_items) => {
      let subTotal = 0
      cart_items.map(item => {
        subTotal += Number(item.price) * Number(item.quantity)
      })
      console.log(cart_items)
      this.setState({ cart_items, subTotal, isLoading: false });
    });
  } 

  createOrder(event){
    event.preventDefault()
    console.log(event.currentTarget)
    const { currentTarget } = event
    let fd = new FormData( currentTarget )

    Order.create({
      customer_name: fd.get('customer_name'),
      email: fd.get('email'),
      shipping_address: fd.get('shipping_address'),
      cart_items: this.state.cart_items,
      subTotal: this.state.subTotal,
    }).then((data)=>{
      console.log(data)

      this.props.history.push(`/order/${data.id}`)
    })
  }
  

  render() {
    if (this.state.isLoading) {
      return <Spinner message="Loading products from DB" />;
    }
    return (
      <main className="ProductIndex Page">
        <h2 className="ui horizontal divider header">Cart itmes</h2>
        <ul className="ui list">
            {this.state.cart_items && this.state.cart_items.map((product) => (
                <div key={product.id} className="ui raised clearing segment">
                    <h3 className="ui header row">
                        {product.name}
                      <button className="ui small blue right floated circular button " ><h3>{product.price} $</h3></button>
                    </h3>
                    <img src= {product.image } height="100px" width="100px"/>
                    <h3>quantity: {product.quantity}</h3>
                    <button
                        className="ui right floated small red button"
                        onClick={() => this.removeFromCart(product)}
                    >
                        Remove
                    </button>
                </div>
            ))}
        </ul>
        <div>
            <h1 className ="subTotal">Sub Total: <button className="ui huge blue circular button"><h1>{this.state.subTotal}</h1></button>  $</h1>
          <button className="ui right floated small green button"
            onClick ={()=>this.props.history.push(`/products`)}>Add more
          </button>
          <button className="ui right floated small orange button" 
          onClick={()=>{this.setState({dataForm: true})}}
          >Check Out</button>
        </div>
        <div>
          {this.state.dataForm ? <OrderDetail createOrder={this.createOrder}/> : null}
        </div>
      </main>
    );
  }
}

