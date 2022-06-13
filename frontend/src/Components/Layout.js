import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = (props) => {
    const MyComponent = props.myComponent;

    return (
        <>
            <div className="row">
                <div className="col">
                    <Navbar />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <MyComponent orders = {props.orders} handleDelete={props.handleDelete} handleAdd={props.handleAdd}/>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Footer />
                </div>
            </div>

        </>
    );
}

export default Layout;