import React from "react";
import "../Components/Navbar.css";

function Banner() {
	return (
		<div className="hero">
			<img
				src="https://images.unsplash.com/photo-1449247666642-264389f5f5b1?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="banner"
			/>
			<div className="container">
				<div className="hero-text">
					<h1>Logistics Backbone of Digital Finland</h1>
					<p>
						Best delivery service in Oulu: We are a tech platform
						that provides quality <span></span> logistics solutions
						according to your needs.
					</p>
					<a href="">View Details</a>
				</div>
			</div>
		</div>
	);
}
export default Banner;
