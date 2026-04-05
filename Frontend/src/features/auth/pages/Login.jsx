import React from 'react'
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import "../auth.form.scss";

const Login = () => {
    const navigate = useNavigate();

    const { loading, handleLogin } = useAuth();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState(""); 

    const handleSubmit = async(e) => {
        e.preventDefault();
       await handleLogin({email, password}); 
       navigate("/");
        // Handle login logic here
    }

    if(loading){
        return(<main> <h1>Loading...</h1> </main>)
    }

    return (
        <main className="auth-page">
            <div className="form-container">
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" id="email" name="email" placeholder="Enter email address" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" id="password" name="password" placeholder="Enter password" required />
                    </div>

                    <button type="submit" className="button">Login</button>
                </form>

                <p className="alt-text">Don’t have an account? <button type="button" className="link-button" onClick={() => navigate("/register")}>Register</button></p>
            </div>
        </main>
    )
}

export default Login