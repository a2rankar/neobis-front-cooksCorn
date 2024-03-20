import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Form/Login';
import "./Header.css";

function Header() {
    return (
        <div className="container">
        <div className='head'><h1><span>Welcome back<br></br>
            To</span> CooksCorner</h1></div>
         
            <Login/>
        </div>
    )

}

export default Header;
