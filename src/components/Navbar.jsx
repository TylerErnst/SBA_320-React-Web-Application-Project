import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
import { useNavigate } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
              {<li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>}

            </ul>
        </nav>
    );
};

export default Navbar;