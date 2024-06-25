// FeedbackSuccess.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './submittedsuccessfully.css';


function FeedbackSuccess() {
    const history = useNavigate();

    const handleBackToHome = () => {
        history('/Home1');
    };
    const handleToSubmittedFeedback = () => {
        history('/submittedfeedback');
    };
    const handleToFeedback = () => {
        history('/feedback');
    };

    return (
        <div>
            <Header />
            <div className="success-container">
                <h1>Feedback Submitted Successfully!</h1>
                <button onClick={handleBackToHome}>Back to Home</button>
                <button onClick={handleToSubmittedFeedback}>My Feedback</button>
                <button onClick={handleToFeedback}>Submit Another Feedback</button>
            </div>
        </div>
    );
}

export default FeedbackSuccess;
