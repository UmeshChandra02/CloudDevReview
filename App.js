import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './components/LoginPage'; 
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FindJob from './components/FindJob';
import PostJob from './components/PostJob';
import TrackStatus from './components/TrackStatus';
import Navbar from './components/Navbar';

const App = () => {
    const handleLogin = (username, password) => {
        console.log('Logged in with:', username, password);
    };

    const location = useLocation();

    return (
        <>
            {location.pathname !== '/' && <Navbar />}
            <Routes>
                <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/find-job" element={<FindJob />} />
                <Route path="/post-job" element={<PostJob />} />
                <Route path="/track-status" element={<TrackStatus />} />
            </Routes>
        </>
    );
};

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper;
