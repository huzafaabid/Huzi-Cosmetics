import Logo from "./Logo";
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="navColor">
            <div className="container-fluid" >
                <Link className="navbar-brand" to="/"><Logo /></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">

                        <li className="nav-item " >
                            <Link className="nav-link " to="/home" ><span>Home</span></Link>
                        </li>
                        
                        <li className="nav-item " >
                            <Link className="nav-link " to="/products" ><span>Products</span></Link>
                        </li>
                        
                        <li className="nav-item " >
                            <Link className="nav-link " to="/contact-us" ><span>Contact Us</span></Link>
                        </li>

                    </ul>
                    
                </div>
                
                <Link to={"/my-cart"}><button style={{ marginLeft: "350px", padding: "10px 20px", backgroundColor: "transparent", color: "white", border: "1px solid white", borderRadius: "10px" }}>My Cart</button></Link>

            </div>
        </nav>
    );
}

export default Navbar;