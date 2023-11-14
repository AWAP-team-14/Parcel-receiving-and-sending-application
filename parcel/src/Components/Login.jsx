// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		// Perform authentication logic here
		// For simplicity, let's assume any non-empty username and password combination is valid
		if (username && password) {
			// Simulate successful login
		}
	};

	return (
		<div className="main-container">
			<div className="login-container">
				<h2>Login</h2>
				<div>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<Link to="/dashboard">
						<button onClick={handleLogin}>Login</button>
					</Link>
				</div>
				<div className="sign-up">
					<p>
						Don't have an account?{" "}
						<Link to="/signup">Create an account</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
