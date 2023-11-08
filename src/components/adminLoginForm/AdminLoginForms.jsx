import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import "./styles.css";

const AdminLoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            navigate("/statistics")
        } else {
            alert('Username or password incorrect');
        }
    };

    return (
        <div>
            <h2 style={{marginTop: 40}}>Admin Log In</h2>
            <form className="adminForm">
                <input
                    className="adminFormInput"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="adminFormInput"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" style={{
                    height: 30,
                    width: 215,
                    color: "white",
                    background: "green",
                    borderColor: "white",
                    borderRadius: 10,
                    marginTop: 15
                }} onClick={handleLogin}>Log In
                </button>
            </form>
        </div>
    );
};

export default AdminLoginForm;
