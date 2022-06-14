import React, { Component } from 'react';

class CartProduct extends Component {
    state = {quantity: this.props.qty}

    render() {
        return (
            <>
                <div class="card">

                    <div class="card-body">
                        <div style={{ display: "inline-block" }}>
                            <img src={this.props.product.image} alt="product's pic" style={{ height: "80px", width: "80px" }} />
                            <p style={{ display: "inline", fontWeight: "500", marginLeft: "5px" }}>{this.props.product.name}</p>
                        </div>

                        <div style={{ display: "inline-block", marginLeft: "20px" }}>
                            <p style={{ display: "block" }}>Quantity:</p>
                            <input type="number" name="quantity" max={10} min={1} value={this.state.quantity}/>
                        </div>

                        <div style={{ display: "inline-block", marginLeft: "20px" }}>
                            <p style={{ display: "block" }}>Total Price:</p>
                            {this.props.total}$
                        </div>

                        <div style={{ display: "flex", justifyContent:"flex-end"}}>
                            <button onClick={()=>this.props.handleDelete(this.props.id)}>Delete</button>
                        </div>
                    </div>
                    
                </div>
            </>
        );
    }

}

export default CartProduct;