import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./auth.form.scss";

const Register = () => {

    const navigate = useNavigate();

    const [username, setUsername] = React.useState(""); 
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { loading, handleRegister } = useAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();
        await handleRegister({ username, email, password });
        navigate("/");
    };

    if(loading){
        return(<main> <h1>Loading...</h1> </main>)
    }

    return (
        <main className="auth-page">
            <div className="form-container">
                <h1>Register</h1>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input 
                        onChange={(e) => setUsername(e.target.value)}
                        type="text" id="username" name="username" placeholder="Enter username" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                        onChange ={(e) => setEmail(e.target.value)}
                        type="email" id="email" name="email" placeholder="Enter email address" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" id="password" name="password" placeholder="Enter password" required />
                    </div>

                    <button type="submit" className="button">Register</button>
                </form>

                <p className="alt-text">Already have an account? <button type="button" className="link-button" onClick={() => navigate("/login")}>Login</button></p>
            </div>
        </main>
    )
}

export default Register
