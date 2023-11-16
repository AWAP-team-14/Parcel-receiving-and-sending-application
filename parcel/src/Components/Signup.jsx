// src/SignUpPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Signup.css";

const SignUpPage = () => {
	const navigate = useNavigate(); // Initialize useNavigate

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = () => {
		// Handle signup logic (submit data to backend, perform validation, etc.)
		console.log("Signup data:", { firstName, lastName, email, password });

		// Navigate back to the sign-in page after signup
		navigate("/login");
	};

	return (
		<div className="main-container">
			<div className="signup-container">
				<h2>Create an Account</h2>
				<div>
					<label htmlFor="firstName">First Name:</label>
					<input
						type="text"
						id="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="lastName">Last Name:</label>
					<input
						type="text"
						id="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="phone">Phone Number:</label>
					<input
						type="text"
						id="number"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
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
					<button onClick={handleSignUp}>Sign Up</button>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
