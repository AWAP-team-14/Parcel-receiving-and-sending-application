import "./App.css";
import Navbar from "/Users/sushanmaharjan/Desktop/Parcel-receiving-and-sending-application-frontend/parcel/src/Components/Navbar.jsx";
import Banner from "/Users/sushanmaharjan/Desktop/Parcel-receiving-and-sending-application-frontend/parcel/src/Components/Banner.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Banner />
			</BrowserRouter>
		</div>
	);
}

export default App;
