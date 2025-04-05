import React from 'react';
import './PostJob.css';

const PostJob = () => {
    return (
        <div className="post-job-container">
            <h2>Post a Job</h2>
            <form>
                <div className="form-group">
                    <label>Job Title:</label>
                    <input type="text" required />
                </div>
                <div className="form-group">
                    <label>Job Description:</label>
                    <textarea required></textarea>
                </div>
                <div className="form-group">
                    <button type="submit">Submit Job</button>
                </div>
            </form>
        </div>
    );
};

export default PostJob;
