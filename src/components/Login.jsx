import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import logo from "/icons/logo.png";
import "./Login.css"

function Login() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleProceedAsGuest = () => {
        // Navigate to the homepage when "Proceed as Guest" button is clicked
        // navigate('/bouquetbuilder');
    };

    return (
        <div className="login-container">
           <img className="login-img" src={logo} style={{ width: "8rem" }}></img>


            <h2 className="login-h2">Bloomcrafter Login</h2>
            <form className="login-form">
                <input className="login-input" type="text" name="username" placeholder="Username" required /><br />
                <input className="login-input" type="password" name="password" placeholder="Password" required /><br />
                <input className="login-input" type="submit" value="Login" />
            </form>
            <div className="proceed-as-guest">
                <button className="login-button" onClick={handleProceedAsGuest}>Proceed as Guest</button>
            </div>
        </div>
    );
}

export default Login;
