import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li>Work</li>
                <li>Approach</li>
                <li>Culture</li>
                <li>Careers</li>
                <li>Blog</li>
            </ul>
            <button>Get in touch</button>
        </div>
    );
}

export default Navbar;
