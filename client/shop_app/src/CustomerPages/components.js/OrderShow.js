import React, { useEffect, useState } from 'react'
import {Order} from '../../api/order'

export const OrderShow = (props) =>{
    
    const [ order, setOrder] = useState({})

    useEffect(()=>{
        Order.one(props.match.params.id).then(order =>{
            setOrder(order)
        })
    },
    []
    )

    return(
      <main>
        <h1 className="ui horizontal divider header">Order number {order.id} </h1>
        {order.order_details && order.order_details.map( (orderDetail)=>(
            <div className="ui raised clearing segment blue">
                <h1 className="">product id {orderDetail.product_id}</h1>
                <h2 className="">product price {orderDetail.price}</h2>
                <h2 className="">product quantity {orderDetail.quantity}</h2>
            </div>
        ))}
        <h1>subtotal: {order.order_details && order.order_details.reduce((acc, orderDetail) => { return acc += orderDetail.price*orderDetail.quantity }, 0)}</h1>
      </main>
    )
}