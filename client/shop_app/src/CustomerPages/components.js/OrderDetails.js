import React from 'react'


export const OrderDetail = (props) =>{
    let createOrder = props.createOrder

    return(
      <main>
        <h1>Add Order Details</h1>

        <form onSubmit={(event)=>createOrder(event)} className="ui large form clearing segment">
          <div className="field">
            <label htmlFor='customer_name'>Your Name</label>
            <input type='string' name='customer_name' id='customer_name' />
          </div>            
          <div className="field">
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' />
          </div>
          <div className="field">
            <label htmlFor='shipping_address'>Shipping Address</label>
            <input type='text' name='shipping_address' id='shipping_address' />
          </div>
          <input type='submit' value='Place Order' className="ui right floated positive button" />
        </form>
      </main>
    )
}
 