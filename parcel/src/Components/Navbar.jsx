import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Hamburger } from "../Assets/Logos/icons8-hamburger-menu-30.svg";
import { ReactComponent as Brand } from "../Assets/Logos/logoipsum-265.svg";
import "../Components/Banner.css";

function Navbar() {
	const [showNavbar, setShowNavbar] = useState(false);
	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	return (
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
	);
}

export default Navbar;
