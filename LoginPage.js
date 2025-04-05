import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/home');
    };

    return (
        <div className="myform-area">
            <div className="form-area">
                <div className="form-content">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="form-group">
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="myform-button">
                            <button type="submit" className="myform-btn">Login</button>
                        </div>
                        <h4>USER NAME ACCEPTS ONLY MAIL ID</h4>
                    </form>
                    <div className="signup-text">
                        <span>Don't have an account? </span>
                        <a href="/signup" className="signUPtext">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
