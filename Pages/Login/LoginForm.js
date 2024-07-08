import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import google from "../../assets/google.png";

const LoginForm = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        // Navigate to the home page and set isLoggedIn to true
        setIsLoggedIn(true);
        navigate('/home');
    };

    return (
        <>
            <section id='main-section'>
                <section className='top-section'>
                    <p className='top-paragraph'>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</p>
                    <span className='top-timer'>Until the end of the sale: 47 days 06 hours 52 minutes 13 sec.</span>
                </section>
            </section>
            <section id='spotlight'>
                <section className='container'>
                    <div className="login-form-container">
                        <div className='top'>
                            <h2>WELCOME BACK</h2>
                            <h5>welcome back! please enter tour details</h5>
                        </div>
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder='Enter your email...'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder='*********'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <span className="forgot-password">Forgot Password?</span>
                            <button type="submit" className="login-button">Sign In</button>
                            <button type="button" className="google-button">
                                <span><img src={google} alt="Google Logo" /></span>Sign In with Google</button>
                            <div className="signup-option">
                                Don't have an account? <a href="#">Sign up for free!</a>
                            </div>
                        </form>
                    </div>
                </section>
            </section>
        </>
    );
};

export default LoginForm;
