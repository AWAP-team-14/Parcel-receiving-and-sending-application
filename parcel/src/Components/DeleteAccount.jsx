import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Hamburger } from "../Assets/Logos/icons8-hamburger-menu-30.svg";
import { ReactComponent as Brand } from "../Assets/Logos/logoipsum-265.svg";
import "./DeleteAccount.css";
import React from "react";
// import { useHistory } from "react-router-dom";

function DeleteAccount() {
	const [showNavbar, setShowNavbar] = useState(false);
	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleDeleteAccount = () => {
		// Perform email and password verification logic here
		// ...
		// If verification is successful, proceed with account deletion
		// Redirect to the home page or a confirmation page after deletion
	};

	const toggleConfirmation = () => {
		setShowConfirmation(!showConfirmation);
	};
	return (
		<div className="home">
			<nav className="navbar">
				<div className="container">
					<div className="logo">
						<Brand />
					</div>
					<div className="menu-icon" onClick={handleShowNavbar}>
						<Hamburger />
					</div>
					<div className={`nav-elements  ${showNavbar && "active"}`}>
						<ul>
							<li>
								<NavLink to="/services">Services</NavLink>
							</li>
							<li>
								<NavLink to="/history">History</NavLink>
							</li>
							<li>
								<NavLink to="/notifications">
									Notifications
								</NavLink>
							</li>
							<li>
								<NavLink to="/">Logout</NavLink>
							</li>
							<li>
								<NavLink to="/">Delete Account</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="delete-account-container">
				<h2>Delete Account</h2>
				<p>
					Are you sure you want to delete your account? This action
					cannot be undone.
				</p>

				<div className="input-container">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="input-container">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<button onClick={toggleConfirmation}>Delete Account</button>

				{showConfirmation && (
					<div className="confirmation-dialog">
						<p>Confirm deletion:</p>
						<button
							className="confirm-button"
							onClick={handleDeleteAccount}>
							Yes, Delete
						</button>
						<button
							className="cancel-button"
							onClick={toggleConfirmation}>
							Cancel
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
export default DeleteAccount;
