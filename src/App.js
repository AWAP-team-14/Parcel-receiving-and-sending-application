import Signup from "./screens/signup";
import Login from "./screens/login";
import DriverLogin from "./driverLogin";
import Home from "./screens/home";
import Parcel from "./components/CreateParcel";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/driverlogin" element={<DriverLogin />} />
          <Route exact path="/createparcel" element={<Parcel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
