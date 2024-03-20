import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Form/Login';
import "./Header.css";

function Header() {
    return (
        <div>
            {/* <div className='head'><h1><span>Welcome back<br></br>
                To</span> CooksCorner</h1></div> */}
            <div className="container">
                <Login/>
            </div>
        </div>
    )

}

export default Header;

