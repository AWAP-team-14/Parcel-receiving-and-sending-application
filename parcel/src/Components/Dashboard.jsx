import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Hamburger } from "../Assets/Logos/icons8-hamburger-menu-30.svg";
import { ReactComponent as Brand } from "../Assets/Logos/logoipsum-265.svg";
import "./Dashboard.css";
import React from "react";

function Home() {
	const [showNavbar, setShowNavbar] = useState(false);
	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
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
								<NavLink to="/deleteaccount">Delete Account</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="main-container">
				<div className="hero-text">
					<h1>Dashboard</h1>
					<p>
						Greetings sdf,to send a parcel click "SEND PARCEL" button,
						then fill out the form.
					</p>
					<a href="/">
						<NavLink to="/Parcelform">Send Parcel</NavLink>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Home;
