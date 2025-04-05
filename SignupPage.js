import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        console.log("User signed up:", { username, password });
        
        setError('');
        navigate('/login');
    };

    return (
        <div className="myform-area">
            <div className="form-area">
                <div className="form-content">
                    <h2>Sign Up</h2>
                    {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
                    <form onSubmit={handleSignup}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                id="username" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input 
                                type="password" 
                                id="confirm-password" 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="myform-button">
                            <button type="submit" className="myform-btn">Sign Up & LoginIn</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
