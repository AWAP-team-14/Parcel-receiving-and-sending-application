import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ onCreateParcelClick, onTrackParcelClick }) {
  const navigate = useNavigate();
  const [createParcelClicked, setCreateParcelClicked] = useState(false);
  const [trackParcelClicked, setTrackParcelClicked] = useState(false);
  const handleLogout = async () => {
    localStorage.removeItem("token");
    navigate("/home");
  };
  const handleDelete = async () => {
    try {
      const response = await fetch("http://localhost:5000/delete/", {
        method: "DELETE",
        headers: {
          auth_token: localStorage.getItem("token"),
          user: localStorage.getItem("user"),
        },
      });

      const json = await response.json();

      if (json.success) {
        // Account deleted successfully
        localStorage.removeItem("token");
        navigate("/home");
      } else {
        // Handle error, show a message, etc.
        console.error("Failed to delete account");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleCreateParcel = async () => {
    setCreateParcelClicked(true);
    setTrackParcelClicked(false); // Reset trackParcelClicked
    onCreateParcelClick();
    navigate("/home");
  };

  const handleTrackParcel = async () => {
    setTrackParcelClicked(true);
    setCreateParcelClicked(false); // Reset createParcelClicked
    onTrackParcelClick();
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
          <Link className="navbar-brand fs-1 fst-italic" to="/home ">
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
                <Link className="btn bg-white text-success mx-1 " to="/login">
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
                    trackParcelClicked ? "clicked" : ""
                  }`}
                  onClick={handleTrackParcel}
                >
                  Track Parcel
                </button>
                <button
                  className={`bg-white text-danger mx-2 ${
                    createParcelClicked ? "clicked" : ""
                  }`}
                  onClick={handleCreateParcel}
                >
                  Create Parcel
                </button>
                <button
                  className="bg-white text-danger mx-2"
                  //onClick={handleHistory}
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
