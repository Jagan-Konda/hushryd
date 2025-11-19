import { LuCar } from "react-icons/lu";
import { Link } from "react-router-dom";

import './index.css'

function Header() {
    return (
        <header className="header">
            <nav className="nav-container">
                <div className="logo">
                    <div className="car-container">
                        <LuCar className="car-logo" />
                    </div>
                    <h1 className="logo-heading">HushRyd</h1>
                </div>
                <div className="nav-links-container">
                    <Link to="" className="nav-link">About Us</Link>
                    <Link to="" className="nav-link">Careers</Link>
                    <Link to="" className="nav-link">Safety Features</Link>
                    <Link to="" className="nav-link">How it works</Link>
                    <Link to="" className="nav-link">For Drivers</Link>
                </div>
                <div className="sign-in-ride-container">
                    <button className="sign-in-button">Sign In</button>
                    <button className="post-a-ride-button">Post a Ride</button>
                </div>
            </nav>
        </header>
    )
}

export default Header