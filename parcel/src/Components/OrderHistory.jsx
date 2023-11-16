import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Hamburger } from "../Assets/Logos/icons8-hamburger-menu-30.svg";
import { ReactComponent as Brand } from "../Assets/Logos/logoipsum-265.svg";
import "./OrderHistory.css";
import React from "react";

function History() {
	const [showNavbar, setShowNavbar] = useState(false);
	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	const parcelsData = [
		{
			id: 1,
			senderName: "Company ABC",
			recipient: "John Doe",
			readyForPickupDateTime: "2023-11-20 10:00 AM",
			pickedUpDateTime: "2023-11-20 03:30 PM",
			status: "Delivered",
			location: "Parcel Locker A",
			pickupCode: "123456",
		},
	];

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
			<div className="history-page">
				<div className="parcel-list">
					<h2>Your Parcels</h2>
					<table>
						<thead>
							<tr>
								<th>Parcel Sender</th>
								<th>Recipient</th>
								<th>Ready for Pickup</th>
								<th>Picked Up</th>
								<th>Status</th>
								<th>Location</th>
								<th>Pickup Code</th>
							</tr>
						</thead>
						<tbody>
							{parcelsData.map((parcel) => (
								<tr key={parcel.id}>
									<td>{parcel.senderName}</td>
									<td>{parcel.recipient}</td>
									<td>{parcel.readyForPickupDateTime}</td>
									<td>{parcel.pickedUpDateTime}</td>
									<td>{parcel.status}</td>
									<td>{parcel.location || "-"}</td>
									<td>{parcel.pickupCode || "-"}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
export default History;
