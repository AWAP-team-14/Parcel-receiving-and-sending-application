import React, { useEffect, useState } from "react";

const TrackParcel = () => {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const handleTrack = async () => {
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

        if (!isMounted) {
          return;
        }

        const json = await response.json();
        if (json.isSender) {
          localStorage.setItem("isSender", true);
        } else {
          localStorage.setItem("isSender", "");
        }

        if (json.success) {
          setParcels(json.response || []);
        } else {
          alert("Failed to fetch parcel data");
        }

        setLoading(false);
      } catch (error) {
        alert("An error occurred:", error);
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
                  {parcel.sender.mobile === localStorage.getItem("mobile") ? (
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
                            {parcel.status === "Parcel Created" && (
                              <p>Locker Number: {parcel.senderCabinet}</p>
                            )}
                            <p>Mobile: {parcel.sender.mobile}</p>
                            {parcel.status === "Parcel Created" && (
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
                  ) : (
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
                            {parcel.status === "Ready for Pickup" && (
                              <p>Locker Number: {parcel.recipientCabinet}</p>
                            )}
                            {parcel.status === "Ready for Pickup" && (
                              <p>Recipient Code: {parcel.recipientCode}</p>
                            )}

                            <p>Mobile: {parcel.recipient.mobile}</p>
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
                  )}
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
