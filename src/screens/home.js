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
        alert("Failed to delete account");
      }
    } catch (error) {
      alert("An error occurred:", error);
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
            'url("https://img.freepik.com/premium-photo/cardboard-boxes-different-sizes-row-purple-background-parcel-delivery-concept_124595-1679.jpg?w=826")',
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
              GoParcel stands as a leading parcel delivery service committed to
              refining and optimizing the delivery process. Our dependable and
              effective services are extended across five lively cities in
              Finland. Strategically positioned lockers in pivotal urban
              centers, such as Oulu, Helsinki, Tampere, Turku, and Kuopio,
              ensure broad accessibility for both senders and recipients.
              GoParcel strives to revolutionize the parcel-handling experience,
              not only enhancing efficiency but also introducing convenience and
              stress-free solutions for individuals and businesses alike
              throughout these five cities.
            </p>
          </div>
        )}
        {!localStorage.getItem("token") && (
          <div style={{ paddingBottom: "312px" }}>
            <h2 className="display-4 fw-bold text-black text-center">
              Welcome to GoParcel
            </h2>
            <p className="lead fs-10 fw-bold text-black text-primary text-justify">
              Go Parcel stands as a leading parcel delivery service committed to
              refining and optimizing the delivery process. Our dependable and
              effective services are extended across five lively cities in
              Finland. Strategically positioned lockers in pivotal urban
              centers, such as Oulu, Helsinki, Tampere, Turku, and Kuopio,
              ensure broad accessibility for both senders and recipients. Go
              Parcel strives to revolutionize the parcel-handling experience,
              not only enhancing efficiency but also introducing convenience and
              stress-free solutions for individuals and businesses alike
              throughout these five cities.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
