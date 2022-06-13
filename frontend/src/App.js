import Layout from './Components/Layout';
import React, { cloneElement, Component } from 'react';
import Home from './Home';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invalid from './Invalid';
import Products from './Products';
import ContactUs from './Contact-Us';
import MyCart from './MyCart';
import { getCartDetails } from './Components/CartDetails';
import {addNewCartItem} from './Service/cartProduct';

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

        <div className="App">
          <Routes>
            <Route path='/' element={<Layout myComponent={Home} handleAdd = {this.handleAdd}/>} />
            <Route path='/home' element={<Layout myComponent={Home} handleAdd = {this.handleAdd}/>} />
            <Route path='/products' element={<Layout myComponent={Products} handleAdd = {this.handleAdd}/>} />
            <Route path='/contact-us' element={<Layout myComponent={ContactUs} />} />
            <Route path='/my-cart' element={<Layout myComponent={MyCart} handleDelete = {this.handleDelete} orders = {this.state.orders}/>} />


            <Route path='*' element={<Layout myComponent={Invalid} />} />
          </Routes>

        </div>

      </Router>
    );
  }
}

export default App;
