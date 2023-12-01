import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({
  onCreateParcelClick,
  onTrackParcelClick,
  onHistoryClick,
  onLogoutClick,
  onGoHomeClick,
  onDeleteAccountClick,
}) {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleLogout = async () => {
    setSelectedComponent(null);
    onLogoutClick();
    navigate("/home");
  };

  const handleDelete = async () => {
    setSelectedComponent(null);
    onDeleteAccountClick();
    navigate("/home");
  };

  const handleCreateParcel = async () => {
    setSelectedComponent("createParcel");
    onCreateParcelClick();
    navigate("/home");
  };

  const handleTrackParcel = async () => {
    setSelectedComponent("trackParcel");
    onTrackParcelClick();
    navigate("/home");
  };

  const handleHistory = async () => {
    setSelectedComponent("history");
    onHistoryClick();
    navigate("/home");
  };

  const handleGoHome = () => {
    setSelectedComponent(null);
    onGoHomeClick();
    navigate("/home");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-success position-sticky"
        style={{
          boxShadow: "0px 10px 20px black",
          filter: "blur(20)",
          position: "fixed",
          zIndex: "10",
          width: "100%",
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand fs-1 fst-italic"
            to="/home"
            onClick={handleGoHome}
          >
            GoParcel
          </Link>
          <span
            style={{
              fontSize: "20px",
              paddingLeft: "40px",
              paddingRight: "40px",
              paddingTop: "12px",
              color: "black",
              fontWeight: "bold",
            }}
          >
            {localStorage.getItem("username")}
          </span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            {!localStorage.getItem("token") ? (
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>
                <Link className="btn bg-white text-success mx-1" to="/signup">
                  Signup
                </Link>
              </div>
            ) : (
              <div className="d-flex">
                <button
                  className={`bg-white text-danger mx-2 ${
                    selectedComponent === "trackParcel" ? "clicked" : ""
                  }`}
                  onClick={handleTrackParcel}
                >
                  Track Parcel
                </button>
                <button
                  className={`bg-white text-danger mx-2 ${
                    selectedComponent === "createParcel" ? "clicked" : ""
                  }`}
                  onClick={handleCreateParcel}
                >
                  Create Parcel
                </button>
                <button
                  className={`bg-white text-danger mx-2 ${
                    selectedComponent === "history" ? "clicked" : ""
                  }`}
                  onClick={handleHistory}
                >
                  History
                </button>
                <button
                  className="bg-white text-danger mx-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                <button
                  className="bg-white text-danger mx-2"
                  onClick={handleDelete}
                >
                  Delete Account
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
