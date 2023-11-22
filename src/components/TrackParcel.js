import React, { useEffect, useState } from "react";

const TrackParcel = () => {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const handleTrack = async () => {
      try {
        const response = await fetch("http://localhost:5000/createparcel/", {
          method: "GET",
          headers: {
            auth_token: localStorage.getItem("token"),
            mobile: localStorage.getItem("mobile"),
          },
        });

        if (!isMounted) {
          return;
        }

        const json = await response.json();
        console.log(json);
        if (json.isSender) {
          localStorage.setItem("isSender", true);
          localStorage.setItem("isRecipient", "");
        } else if (json.isRecipient) {
          localStorage.setItem("isRecipient", true);
          localStorage.setItem("isSender", "");
        }

        console.log(localStorage.getItem("isSender"));
        console.log(localStorage.getItem("isRecipient"));

        if (json.success) {
          setParcels(json.response || []);
        } else {
          console.error("Failed to fetch parcel data");
        }

        setLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
        setLoading(false);
      }
    };

    handleTrack();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="container mt-1">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {parcels.length === 0 ? (
            <p>No parcel data found</p>
          ) : (
            <div>
              {parcels.map((parcel, index) => (
                <div key={index} className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="card-body">
                        <div className="mb-3">
                          <p
                            style={{
                              fontWeight: "bold",
                              color: "rgb(72, 135, 248)",
                              fontSize: "20px",
                            }}
                          >
                            Sender Information
                          </p>
                          <p>Name: {parcel.sender.name}</p>
                          <p>Address: {parcel.sender.address}</p>
                          <p>Mobile: {parcel.sender.mobile}</p>

                          {localStorage.getItem("isSender") && (
                            <p>Sender Code: {parcel.senderCode}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card-body">
                        <div className="mb-3">
                          <p
                            style={{
                              fontWeight: "bold",
                              color: "rgb(72, 135, 248)",
                              fontSize: "20px",
                            }}
                          >
                            Recipient Information
                          </p>
                          <p>Name: {parcel.recipient.name}</p>
                          <p>Address: {parcel.recipient.address}</p>
                          <p>Mobile: {parcel.recipient.mobile}</p>
                          {localStorage.getItem("isRecipient") && (
                            <p>Recipient Code: {parcel.recipientCode}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card-body">
                        <div>
                          <p
                            style={{
                              fontWeight: "bold",
                              color: "rgb(72, 135, 248)",
                              fontSize: "20px",
                            }}
                          >
                            Parcel Size
                          </p>
                          <p>Width: {parcel.parcelSize.width}</p>
                          <p>Height: {parcel.parcelSize.height}</p>
                          <p>Depth: {parcel.parcelSize.depth}</p>
                          <p>Weight: {parcel.parcelSize.weight}</p>
                          <p
                            style={{
                              fontWeight: "bold",
                              color: "rgb(246, 65, 47)",
                              fontSize: "20px",
                            }}
                          >
                            Status: {parcel.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TrackParcel;
