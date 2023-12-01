import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreateParcel from "../components/CreateParcel";
import TrackParcel from "../components/TrackParcel";
import TrackParcelsHistory from "../components/TrackParcelsHistory";

export default function Home() {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleCreateParcelClick = () => {
    setSelectedComponent("createParcel");
  };

  const handleTrackParcelClick = () => {
    setSelectedComponent("trackParcel");
  };

  const handleHistoryClick = () => {
    setSelectedComponent("history");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("mobile");
    localStorage.removeItem("username");
    navigate("/home");
  };

  const handleDeleteAccountClick = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/delete`, {
        method: "DELETE",
        headers: {
          auth_token: localStorage.getItem("token"),
          user: localStorage.getItem("user"),
        },
      });

      const json = await response.json();

      if (json.success) {
        localStorage.removeItem("token");
        navigate("/home");
      } else {
        console.error("Failed to delete account");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleCloseComponent = () => {
    setSelectedComponent(null);
    navigate("/home");
  };
  return (
    <div>
      <Navbar
        onCreateParcelClick={handleCreateParcelClick}
        onTrackParcelClick={handleTrackParcelClick}
        onHistoryClick={handleHistoryClick}
        onLogoutClick={handleLogoutClick}
        onGoHomeClick={handleCloseComponent}
        onDeleteAccountClick={handleDeleteAccountClick}
      />
      <div
        className="background-image"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/yellow-locker-with-screen-scanner-storage-packages-purchased-online-messaging-concept-compare-online-e-commerce-packages_325364-1793.jpg?w=826")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <div className="container" style={{ paddingTop: "10px" }}>
        {localStorage.getItem("token") &&
          selectedComponent === "createParcel" && (
            <CreateParcel onCloseCreateParcel={handleCloseComponent} />
          )}
        {localStorage.getItem("token") &&
          selectedComponent === "trackParcel" && (
            <TrackParcel onTrackParcelClick={handleTrackParcelClick} />
          )}
        {localStorage.getItem("token") && selectedComponent === "history" && (
          <TrackParcelsHistory onHistoryClick={handleHistoryClick} />
        )}
        {localStorage.getItem("token") && selectedComponent === null && (
          <div style={{ paddingBottom: "312px" }}>
            <h2 className="display-4 fw-bold text-black text-center">
              Welcome to GoParcel
            </h2>
            <p className="lead fs-10 fw-bold text-black text-primary text-justify">
              Introducing GoParcel, the dependable ally for seamless and
              trustworthy parcel delivery solutions. Our goal is to streamline
              and elevate your delivery encounters, ensuring the swift and
              secure arrival of your packages at their destination. Equipped
              with an intuitive interface, real-time tracking capabilities, and
              a devoted team dedicated to excellence, GoParcel is crafted to
              address your delivery requirements with efficiency and precision.
              Whether dispatching a crucial document or a unique package, you
              can rely on GoParcel to manage it with the utmost dependability.
              Embrace the ease of cutting-edge parcel delivery – opt for
              GoParcel for a journey that provides more than just deliveries; it
              delivers tranquility of mind.
            </p>
          </div>
        )}
        {!localStorage.getItem("token") && (
          <div style={{ paddingBottom: "312px" }}>
            <h2 className="display-4 fw-bold text-black text-center">
              Welcome to GoParcel
            </h2>
            <p className="lead fs-10 fw-bold text-black text-primary text-justify">
              Introducing GoParcel, the dependable ally for seamless and
              trustworthy parcel delivery solutions. Our goal is to streamline
              and elevate your delivery encounters, ensuring the swift and
              secure arrival of your packages at their destination. Equipped
              with an intuitive interface, real-time tracking capabilities, and
              a devoted team dedicated to excellence, GoParcel is crafted to
              address your delivery requirements with efficiency and precision.
              Whether dispatching a crucial document or a unique package, you
              can rely on GoParcel to manage it with the utmost dependability.
              Embrace the ease of cutting-edge parcel delivery – opt for
              GoParcel for a journey that provides more than just deliveries; it
              delivers tranquility of mind.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
