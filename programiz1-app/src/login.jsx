import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLogin() {
        try {
            const result = await fetch("https://686d0b9e14219674dcca359f.mockapi.io/api/data");
            const response = await result.json();
            const data = response.find(item => item.myEmail === email && item.myPassword === password);
            
            if (data) {
                alert("Login successful");
                navigate("/home");
            } else {
                alert("Login failed");
                setEmail("");
                setPassword("");
            }
        } catch (error) {
            alert("Something went wrong");
        }
    }

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            
            <label className="login-label">Enter Email</label>
            <input
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="example@example.com"
            />
            
            <label className="login-label">Enter Password</label>
            <input
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
            />
            
            <button className="login-button" onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
