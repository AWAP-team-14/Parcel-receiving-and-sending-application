import "./App.css";
// import Navbar from "./Components/Navbar.jsx";
// import Banner from "./Components/Banner.jsx";
import Home from "./Components/Home.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* <Navbar />
				<Banner /> */}
				<Home />
			</BrowserRouter>
		</div>
	);
}

export default App;
