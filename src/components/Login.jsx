import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from "/icons/logo.png";
import "./Login.css";


function Login() {
    const navigate = useNavigate(); 

    const handleTakeQuiz = () => {
        // Navigate to the quiz page when "Take Our Quiz" button is clicked
        navigate('/quiz');
    };

    const handleBuildBouquet = () => {
        // Navigate to the bouquet builder page when "Build Your Own Bouquet" button is clicked
        navigate('/bouquetbuilder');
    };

    return (
        <div className="login-container" style={{"textAlign":"center"}}>
           <img className="login-img" src={logo} style={{ width: "8rem" }}></img>

            <h2 className="login-h2">Create joy, one bouquet at a time!</h2>
            <div className="proceed-as-guest">
                <button className="login-button" onClick={handleBuildBouquet}>Build Your Own Bouquet</button>
            </div>
            <p className="quiz-text">Not sure where to start? Let us help! Take our quiz to get started.</p>
            <div className="proceed-as-guest">
                <button className="login-button" onClick={handleTakeQuiz}>Take Our Quiz</button>
            </div>
        </div>
    );
}

export default Login;
