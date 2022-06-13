import React, { Component } from 'react';
import ProductCard from './Components/ProductCard';
import { getProductDetails } from './ProductDetails';

class Home extends Component {
    state = {
        Details: getProductDetails()
    }
    render() {
        return (
            <>
            
                <div style={{display:"flex", justifyContent:"center"}}>
                    <h2>Popular Products</h2>
                </div>

                <div className="row">

                    <div className="col">
                        <ProductCard prod={this.state.Details[10]} pic={this.state.Details[10].image} title={this.state.Details[10].name} price={this.state.Details[10].price} handleAdd={this.props.handleAdd}/>
                    </div>

                    <div className="col">
                        <ProductCard prod={this.state.Details[11]} pic={this.state.Details[11].image} title={this.state.Details[11].name} price={this.state.Details[11].price} handleAdd={this.props.handleAdd}/>
                    </div>

                    <div className="col">
                        <ProductCard prod={this.state.Details[3]} pic={this.state.Details[3].image} title={this.state.Details[3].name} price={this.state.Details[3].price} handleAdd={this.props.handleAdd}/>
                    </div>

                    <div className="col">
                        <ProductCard prod={this.state.Details[9]} pic={this.state.Details[9].image} title={this.state.Details[9].name} price={this.state.Details[9].price} handleAdd={this.props.handleAdd}/>
                    </div>

                </div>
            </>
        );
    }
}

export default Home;