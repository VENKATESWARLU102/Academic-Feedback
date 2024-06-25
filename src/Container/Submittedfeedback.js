// Assume this is the component where you fetch data and pass it to FeedbackSubmitted
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Submittedfeedback.css';

function SomeComponent() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const history = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/submittedfeedback')
            .then(response => {
                // console.log("feedback",response.data)
                setFeedbacks(response.data);
            })
            .catch(error => {
                console.error('Error fetching feedbacks:', error);
            });
    }, []);

    const filteredFeedbacks = feedbacks.filter(feedback =>
        feedback.facultyName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Header />
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by Faculty Name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="feedback-container">
                {filteredFeedbacks.map((feedback, index) => (
                    <div key={index} className="feedback-card">
                        <p>Department: {feedback.dept}</p>
                        <p>Subject: {feedback.sub}</p>
                        <p>Faculty Name: {feedback.facultyName}</p>
                        <p>Explanation: {feedback.explanation}</p>
                        <p>Clarifying Doubts: {feedback.clarifying}</p>
                        <p>Usage of Blackboard: {feedback.usage}</p>
                        <p>Interaction with Students: {feedback.interaction}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SomeComponent;
