import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Hamburger } from "../Assets/Logos/icons8-hamburger-menu-30.svg";
import { ReactComponent as Brand } from "../Assets/Logos/logoipsum-265.svg";
import "./Home.css";
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
								<NavLink to="/about">About Us</NavLink>
							</li>
							<li>
								<NavLink to="/contact">Contact</NavLink>
							</li>
							<li>
								<NavLink to="/login">Sign Up/Log in</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="hero">
				<img
					src="https://images.unsplash.com/photo-1449247666642-264389f5f5b1?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="banner"
				/>
				<div className="container">
					<div className="hero-text">
						<h1>Logistics Backbone of Digital Finland</h1>
						<p>
							Best delivery service in Oulu: We are a tech
							platform that provides quality <span></span>{" "}
							logistics solutions according to your needs.
						</p>
						<a href="">View Details</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
