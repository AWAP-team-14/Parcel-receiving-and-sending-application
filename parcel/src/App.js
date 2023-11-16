import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login";
import SignUpPage from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Parcelform from "./Components/Parcelform";
import NotificationPage from "./Components/Notifications";
import History from "./Components/OrderHistory";
import DeleteAccount from "./Components/DeleteAccount";

function Layout() {
	return (
		<div className="App">
			<Home />
		</div>
	);
}

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/parcelform" element={<Parcelform />} />
				<Route path="/notifications" element={<NotificationPage />} />
				<Route path="/history" element={<History />} />
				<Route path="/deleteaccount" element={<DeleteAccount />} />
			</Routes>
		</Router>
	);
}

export default App;
