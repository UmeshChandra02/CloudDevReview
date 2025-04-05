import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="welcome-message">
                <h1>Welcome!</h1>
                <h2>A web-based system for managing student work-study programs.</h2>
                
            </div>
            <div className="services-section">
                <h2>Our Services</h2>
                <div className="service-cards">
                    <div className="service-card">
                        <h3>Post a Job</h3>
                        <p>Job providers post a job</p>
                    </div>
                    <div className="service-card">
                        <h3>Find a Job</h3>
                        <p>Sudents Search and apply for jobs based on their study and work Preferences</p>
                    </div>
                    <div className="service-card">
                        <h3>Track Status</h3>
                        <p>Can track the application status</p>
                    </div>
                </div>
            </div>
            <h2>Description:</h2>
            <h3>This platform helps to manage work-study opportunities, including job postings, student applications.</h3>
            <h3> App help students find and manage work-study positions.</h3>
            <h3>  Admin: Post work-study opportunities, manage applications.</h3>
            <h3>   user (Student): Apply for work-study positions, track application, receive feedback.</h3>
        </div>
        
    );
};

export default HomePage;
