import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Hamburger } from "../Assets/Logos/icons8-hamburger-menu-30.svg";
import { ReactComponent as Brand } from "../Assets/Logos/logoipsum-265.svg";
import "./Parcelform.css";
import React from "react";

function Parcelform() {
	const [showNavbar, setShowNavbar] = useState(false);
	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	const [recipientFirstName, setRecipientFirstName] = useState("");
	const [recipientLastName, setRecipientLastName] = useState("");
	const [mobilePhoneNumber, setMobilePhoneNumber] = useState("");
	const [recipientEmail, setRecipientEmail] = useState("");
	const [streetName, setStreetName] = useState("");
	const [houseNumber, setHouseNumber] = useState("");
	const [apartment, setApartment] = useState("");
	const [postcode, setPostcode] = useState("");
	const [description, setDescription] = useState("");
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [depth, setDepth] = useState("");
	const [length, setLength] = useState("");
	const [value, setValue] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// Handle form submission logic here
		// You can send the form data to your server or perform any other action
		console.log({
			recipientFirstName,
			recipientLastName,
			mobilePhoneNumber,
			recipientEmail,
			streetName,
			houseNumber,
			apartment,
			postcode,
			description,
			weight,
			height,
			depth,
			length,
			value,
			message,
		});

		// Reset form fields after submission
		setRecipientFirstName("");
		setRecipientLastName("");
		setMobilePhoneNumber("");
		setRecipientEmail("");
		setStreetName("");
		setHouseNumber("");
		setApartment("");
		setPostcode("");
		setDescription("");
		setWeight("");
		setHeight("");
		setDepth("");
		setLength("");
		setValue("");
		setMessage("");
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
								<NavLink to="/logout">Logout</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div className="parcel-form-container">
				<form onSubmit={handleSubmit} className="parcel-form">
					<h2>Reciever Details</h2>

					{/* Recipient Details */}
					<div className="form-group">
						<label htmlFor="recipientFirstName">First Name:</label>
						<input
							type="text"
							id="recipientFirstName"
							value={recipientFirstName}
							onChange={(e) =>
								setRecipientFirstName(e.target.value)
							}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="recipientLastName">Last Name:</label>
						<input
							type="text"
							id="recipientLastName"
							value={recipientLastName}
							onChange={(e) =>
								setRecipientLastName(e.target.value)
							}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="mobilePhoneNumber">
							Mobile Phone Number:
						</label>
						<input
							type="tel"
							id="mobilePhoneNumber"
							value={mobilePhoneNumber}
							onChange={(e) =>
								setMobilePhoneNumber(e.target.value)
							}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="recipientEmail">Email:</label>
						<input
							type="email"
							id="recipientEmail"
							value={recipientEmail}
							onChange={(e) => setRecipientEmail(e.target.value)}
							required
						/>
					</div>

					{/* Delivery Address */}
					<div className="form-group">
						<label htmlFor="streetName">Street Name:</label>
						<input
							type="text"
							id="streetName"
							value={streetName}
							onChange={(e) => setStreetName(e.target.value)}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="houseNumber">House Number:</label>
						<input
							type="text"
							id="houseNumber"
							value={houseNumber}
							onChange={(e) => setHouseNumber(e.target.value)}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="apartment">Apartment:</label>
						<input
							type="text"
							id="apartment"
							value={apartment}
							onChange={(e) => setApartment(e.target.value)}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="postcode">Postcode:</label>
						<input
							type="text"
							id="postcode"
							value={postcode}
							onChange={(e) => setPostcode(e.target.value)}
							required
						/>
					</div>

					{/* Parcel Details */}
					<div className="form-group">
						<label htmlFor="description">
							Description (Optional):
						</label>
						<textarea
							id="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="weight">Weight (kg):</label>
						<input
							type="text"
							id="weight"
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="height">Height (cm):</label>
						<input
							type="text"
							id="height"
							value={height}
							onChange={(e) => setHeight(e.target.value)}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="depth">Depth (cm):</label>
						<input
							type="text"
							id="depth"
							value={depth}
							onChange={(e) => setDepth(e.target.value)}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="length">Length (cm):</label>
						<input
							type="text"
							id="length"
							value={length}
							onChange={(e) => setLength(e.target.value)}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="value">Value (EUR):</label>
						<input
							type="text"
							id="value"
							value={value}
							onChange={(e) => setValue(e.target.value)}
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="message">Message:</label>
						<textarea
							id="comments"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>

					<button type="submit">
						<Link to="/notifications">Submit</Link>
					</button>
				</form>
			</div>
		</div>
	);
}

export default Parcelform;
