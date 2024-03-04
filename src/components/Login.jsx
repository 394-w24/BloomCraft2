import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import logo from "/icons/logo.png";
import "./Login.css"

function Login() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleTakeQuiz = () => {
        // Navigate to the quiz page when "Take Our Quiz" button is clicked
        navigate('/quiz');
    };

    return (
        <div className="login-container">
           <img className="login-img" src={logo} style={{ width: "8rem" }}></img>


            <h2 className="login-h2">Create Joy, One Bouquet at a Time!</h2>
            <p className="quiz-text">Not sure where to start? Let us help! Take our quiz to get started.</p>
            <div className="proceed-as-guest">
                <button className="login-button" onClick={handleTakeQuiz}>Take Our Quiz</button>
            </div>
        </div>
    );
}

export default Login;
