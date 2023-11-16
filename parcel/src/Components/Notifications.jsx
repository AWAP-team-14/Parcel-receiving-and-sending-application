import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Brand } from "../Assets/Logos/logoipsum-265.svg";
import "./Notifications.css";

const NotificationPage = () => {
	return (
		<div className="notification-page">
			<div className="logo">
				<Brand />
			</div>
			<div className="notification-message">
				<h2>Parcel Sent Successfully!</h2>
				<p>
					Your parcel has been sent. Thank you for using our services.
				</p>
				<NavLink to="/dashboard">Back to Dashboard</NavLink>
			</div>
		</div>
	);
};

export default NotificationPage;
