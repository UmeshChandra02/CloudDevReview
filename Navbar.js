import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        if (typeof onLogout === 'function') {
            onLogout();
        }
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">CD REVIEW</div>
            <ul className="navbar-menu">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/post-job">Post a Job</Link></li>
                <li><Link to="/find-job">Find a Job</Link></li>
                <li><Link to="/track-status">Track Status</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</li>
            </ul>
        </nav>
    );
};

export default Navbar;
