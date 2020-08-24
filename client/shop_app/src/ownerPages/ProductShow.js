import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal} from 'semantic-ui-react'

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
    Product.destroy(this.props.match.params.id).then(res =>{
      this.setState({ product: null, isLoading: true });
    })

  }

  closeModal(){
    this.setState({
      product: null,
      isLoading: false,
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
          <Modal trigger={<Button>Delete </Button>}>
                <Modal.Header>Delete this Product</Modal.Header>
                <Modal.Content>
                <   p>Are you sure you want to delete this product</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative
                      onClick={() => this.closeModal()} 
                    > No </Button>
                    <Button positive
                      onClick={() => this.deleteProduct()}
                    > Yes </Button>
                </Modal.Actions>
            </Modal>
          <Link to={`/products/${this.props.match.params.id}/edit`}>
            <button className="ui right floated huge orange button">
              Edit
            </button>
          </Link>

        </div>
      </main>
    );
  }
}
