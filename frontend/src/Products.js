import React, { Component } from 'react';
import ProductCard from './Components/ProductCard';
import { getProductDetails } from './ProductDetails';

class Products extends Component {
    state = {
        Details: getProductDetails()
    }
    render() {
        return (
            <>
                <h2 style={{ display: "flex", justifyContent: "center" }}>Products</h2>
                <div className="row">

                    {
                        this.state.Details.map(
                            (detail) => (
                                <div className="col">
                                    <ProductCard prod={detail} pic={detail.image} title={detail.name} price={detail.price} handleAdd={this.props.handleAdd} />
                                </div>
                            )
                        )
                    }
                </div>
            </>
        );
    }
}

export default Products;