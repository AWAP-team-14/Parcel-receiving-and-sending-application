import React, { useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CreateParcel from "../components/CreateParcel";
import TrackParcel from "../components/TrackParcel";

export default function Home() {
  const [createParcelClicked, setCreateParcelClicked] = useState(false);
  const handleCreateParcelClick = () => {
    setCreateParcelClicked(!createParcelClicked);
  };

  const [trackParcelClicked, setTrackParcelClicked] = useState(false);
  const handleTrackParcelClick = () => {
    setTrackParcelClicked(!trackParcelClicked);
  };

  return (
    <div>
      <div>
        <Navbar
          onCreateParcelClick={handleCreateParcelClick}
          onTrackParcelClick={handleTrackParcelClick}
        />
      </div>
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
        {localStorage.getItem("token") && createParcelClicked ? (
          <div>
            <CreateParcel onCloseCreateParcel={handleCreateParcelClick} />
          </div>
        ) : (
          <div>
            {localStorage.getItem("token") && trackParcelClicked ? (
              <div>
                <TrackParcel onTrackParcelClick={handleTrackParcelClick} />
              </div>
            ) : (
              <div style={{ paddingBottom: "312px" }}>
                <h2 className="display-4 fw-bold text-black text-center">
                  Welcome to GoParcel
                </h2>
                <p className="lead fs-10 fw-bold text-black text-primary text-justify">
                  Introducing GoParcel, the dependable ally for seamless and
                  trustworthy parcel delivery solutions. Our goal is to
                  streamline and elevate your delivery encounters, ensuring the
                  swift and secure arrival of your packages at their
                  destination. Equipped with an intuitive interface, real-time
                  tracking capabilities, and a devoted team dedicated to
                  excellence, GoParcel is crafted to address your delivery
                  requirements with efficiency and precision. Whether
                  dispatching a crucial document or a unique package, you can
                  rely on GoParcel to manage it with the utmost dependability.
                  Embrace the ease of cutting-edge parcel delivery – opt for
                  GoParcel for a journey that provides more than just
                  deliveries; it delivers tranquility of mind.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
