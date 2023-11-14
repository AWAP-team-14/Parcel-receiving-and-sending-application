import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login";
import SignUpPage from "./Components/Signup";
import Dashboard from "./Components/Dashboard";

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
			</Routes>
		</Router>
	);
}

export default App;
