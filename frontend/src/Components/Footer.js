import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div className="row my-3" id='content-f'>
            <div className="col">
                <p className='heading'>SHOP</p>
                <ul>
                    <Link to="/"><li>Home</li></Link>

                </ul>
            </div>
            <div className="col">
                <p className='heading'>INFORMATON</p>
                <ul>
                    <Link to="/"><li>About Us</li></Link>
                    <Link to="/"><li>Privacy Agreement</li></Link>
                    <Link to="/"><li>FAQs</li></Link>
                </ul>
            </div>
            <div className="col">
                <p className='heading'>LOCATION</p>
                <p id='address'>756-C, Central Behind Center, Tariq, Tariq Street 7, P.E.C.H.S Block 2 Block 2 PECHS, Lahore</p>
            </div>
        </div>

    );
}

export default Footer;