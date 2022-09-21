import React from "react";
import './styleHeader.css';


const Header = () => {
    return(
        <div className="header-body">
            <div className="heading">
                <span className="some">Some</span>
                <span className="company">Company</span>
            </div>
            <div className="list-div">
                <ul className="list">
                    <li className="items">
                        <a href="#">Home</a>
                    </li>
                    <li className="items">
                        <a className="custom-list " href="#">Products</a>
                    </li>
                    <li className="items">
                        <a href="#">FAQ</a>
                    </li>
                    <li className="items">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header