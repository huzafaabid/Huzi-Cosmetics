import React, { cloneElement, Component } from 'react';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invalid from './Invalid';
import Products from './Products';
import ContactUs from './Contact-Us';
import MyCart from './MyCart';
import { getCartDetails } from './Components/CartDetails';
import { addNewCartItem } from './Service/cartProduct';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

class App extends Component {

  state = { orders: getCartDetails() }


  handleDelete = (id) => {
    let clone = { ...this.state };
    clone.orders = clone.orders.filter((order) => (order.id != id));

    this.setState(clone);
  }

  handleAdd = (product) => {

    let clone = { ...this.state };
    let tempID;
    if (clone.orders.length == 0) {
      tempID = 1;
    }
    else {
      let lastIndex = clone.orders.length - 1;
      tempID = clone.orders[lastIndex].id + 1;
    }

    let tempOrder = {
      id: tempID,
      product: product,
      quantity: 1,
      totalPrice: product.price
    }

    addNewCartItem(tempOrder);
    clone.orders.push(tempOrder);

    this.setState(clone);
  }

  render() {
    return (
      <Router>
        <Navbar/>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home handleAdd={this.handleAdd} />} />
            <Route path='/home' element={<Home handleAdd={this.handleAdd} />} />
            <Route path='/products' element={<Products handleAdd={this.handleAdd} />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/my-cart' element={<MyCart handleDelete={this.handleDelete} orders={this.state.orders} />} />

            <Route path='*' element={<Invalid />} />
          </Routes>
        </div>
        <Footer />

      </Router>
    );
  }
}

export default App;
