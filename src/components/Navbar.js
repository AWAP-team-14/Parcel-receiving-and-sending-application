import React, { useState, useEffect } from "react";
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
  const [hasNewNotifications, setHasNewNotifications] = useState(false);
  const [parcelCreatedCount, setParcelCreatedCount] = useState(0);
  useEffect(() => {
    // Check if token is available
    if (localStorage.getItem("token")) {
      // Check for "Ready for Pickup" status and recipient's mobile number
      const checkParcelCreated = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API}/createparcel`,
            {
              method: "GET",
              headers: {
                auth_token: localStorage.getItem("token"),
                mobile: localStorage.getItem("mobile"),
              },
            }
          );

          const json = await response.json();
          if (json.success) {
            const createdParcels = json.response.filter(
              (parcel) =>
                parcel.status === "Ready for Pickup" &&
                parcel.recipient.mobile === localStorage.getItem("mobile")
            );
            setParcelCreatedCount(createdParcels.length);

            // Update the hasNewNotifications state based on the counter
            setHasNewNotifications(createdParcels.length > 0);
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };

      // Call the function to check for "Ready for Pickup" status on mount
      checkParcelCreated();

      // Set up a timer or interval to periodically check for new notifications
      const notificationTimer = setInterval(() => {
        checkParcelCreated();
      }, 10000); // Check every 6 seconds (adjust as needed)

      return () => {
        clearInterval(notificationTimer);
      };
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

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
                {hasNewNotifications && (
                  <span
                    style={{
                      top: "10px",
                      right: "10px",
                      width: "10px",
                      height: "10px",
                      backgroundColor: "red",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  ></span>
                )}
                {/* Parcel counter for "Parcel Created" status */}
                {parcelCreatedCount > 0 && (
                  <span
                    style={{
                      top: "20px",
                      right: "20px",
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    {parcelCreatedCount}
                  </span>
                )}
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
