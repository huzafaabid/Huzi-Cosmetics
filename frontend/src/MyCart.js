import React, { Component } from 'react';
import CartProduct from './Components/CartProduct';



class MyCart extends Component {
    state = {orders: this.props.orders}

    static getDerivedStateFromProps(props, state)
    {
        state.orders = props.orders
    }

    render() {
        return (
            <>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h2>My Cart</h2>
                </div>
                
                {this.state.orders.map(
                    (order) => (
                        <CartProduct id={order.id} product={order.product} qty={order.quantity} total={order.totalPrice} handleDelete={this.props.handleDelete}/>
                    )
                )}

                <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "20px" }}>
                    <div>
                        <h5>Sub Total:</h5>
                        <h5 style={{marginLeft:"30px"}}>{calculateSubTotal(this.state.orders)}$</h5>
                    </div>
                </div>
            </>
        );
    }
}

const calculateSubTotal = (orders) => {
    let sum = 0;
    orders.map((order) => sum += order.totalPrice);

    return sum;
}

export default MyCart;