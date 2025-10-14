import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./signup.css";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const date = new Date();
    const day = date.toLocaleDateString();
    const time = date.toLocaleTimeString();

    async function handleSignup() {
        if(!name || !email || !number || !password){
            alert("please fill the details")
            return
        }
        const formData = {
            myName: name,
            myEmail: email,
            myNumber: number,
            myPassword: password,
            createData: day,
            createTime: time
        };

        const result = await fetch("https://686d0b9e14219674dcca359f.mockapi.io/api/data", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (result.ok) {
            alert("Account created successfully");
            setName("");
            setEmail("");
            setNumber("");
            setPassword("");
            navigate("/login");
        } else {
            alert("Account creation failed");
        }
    }

    return (
        <div className="signup-container">
            <h2 className="signup-title">Create Account</h2>
            <label className="signup-label">Enter Name</label>
            <input className="signup-input" value={name} onChange={(e) => setName(e.target.value)} type="text" />

            <label className="signup-label">Enter Email</label>
            <input className="signup-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />

            <label className="signup-label">Enter Number</label>
            <input className="signup-input" value={number} onChange={(e) => setNumber(e.target.value)} type="tel" />

            <label className="signup-label">Enter Password</label>
            <input className="signup-input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

            <button className="signup-button" onClick={handleSignup}>Sign Up</button>
        </div>
    );
}

export default Signup;
