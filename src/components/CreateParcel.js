import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormField = ({ label, name, value, onChange, options, message }) => (
  <div className="row mb-3" style={{ paddingLeft: "20px" }}>
    <div className="col-md-6">
      <label>{label} :</label>
    </div>
    <div className="col-md-6">
      {options ? (
        <select name={name} value={value} onChange={onChange}>
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <>
          <input type="text" name={name} value={value} onChange={onChange} />
          {message && <p style={{ color: "red" }}>{message}</p>}
        </>
      )}
    </div>
  </div>
);

const CreateParcel = ({ onCloseCreateParcel }) => {
  const navigate = useNavigate();
  const initialParcelData = {
    parcelSize: { width: "", height: "", depth: "", weight: "" },
    sender: { name: "", address: "", mobile: "" },
    recipient: { name: "", address: "", mobile: "" },
  };

  const [parcelData, setParcelData] = useState(initialParcelData);

  const handleChange = (section, e) => {
    const { name, value } = e.target;
    setParcelData((prevData) => ({
      ...prevData,
      [section]: { ...prevData[section], [name]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}/createparcel`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            auth_token: localStorage.getItem("token"),
          },
          body: JSON.stringify(parcelData),
        }
      );

      const json = await response.json();

      if (json.success) {
        console.log(json);
        alert("Parcel Created Successfully");
        onCloseCreateParcel(); // Invoke the function to close the create parcel form
        navigate("/home"); // Navigate back to the home page
      } else {
        console.error("Failed to create parcel");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    onCloseCreateParcel(); // Invoke the function to close the create parcel form
    navigate("/home"); // Navigate back to the home page
  };

  return (
    <div>
      <div className="card mb-2 col-md-6 mx-auto">
        <h1
          className="display-4 fw-bold text-center"
          style={{ paddingBottom: "20px" }}
        >
          Create Parcel
        </h1>
        <form onSubmit={handleSubmit}>
          <FormField
            label="Width"
            name="width"
            value={parcelData.parcelSize.width}
            onChange={(e) => handleChange("parcelSize", e)}
          />
          <FormField
            label="Height"
            name="height"
            value={parcelData.parcelSize.height}
            onChange={(e) => handleChange("parcelSize", e)}
          />
          <FormField
            label="Depth"
            name="depth"
            value={parcelData.parcelSize.depth}
            onChange={(e) => handleChange("parcelSize", e)}
          />
          <FormField
            label="Weight"
            name="weight"
            value={parcelData.parcelSize.weight}
            onChange={(e) => handleChange("parcelSize", e)}
          />
          <FormField
            label="Sender Name"
            name="name"
            value={parcelData.sender.name}
            onChange={(e) => handleChange("sender", e)}
          />
          <FormField
            label="Sender Address"
            name="address"
            value={parcelData.sender.address}
            onChange={(e) => handleChange("sender", e)}
            options={["Oulu", "Helsinki", "Tampere", "Turku", "Kuopio"]}
          />
          <FormField
            label="Sender Mobile"
            name="mobile"
            value={parcelData.sender.mobile}
            onChange={(e) => handleChange("sender", e)}
            message={
              !parcelData.sender.mobile.startsWith("+358")
                ? "Enter a mobile number starting with +358."
                : null
            }
          />
          <FormField
            label="Recipient Name"
            name="name"
            value={parcelData.recipient.name}
            onChange={(e) => handleChange("recipient", e)}
          />
          <FormField
            label="Recipient Address"
            name="address"
            value={parcelData.recipient.address}
            onChange={(e) => handleChange("recipient", e)}
            options={["Oulu", "Helsinki", "Tampere", "Turku", "Kuopio"]}
          />
          <FormField
            label="Recipient Mobile"
            name="mobile"
            value={parcelData.recipient.mobile}
            onChange={(e) => handleChange("recipient", e)}
            message={
              !parcelData.recipient.mobile.startsWith("+358")
                ? "Enter a mobile number starting with +358."
                : null
            }
          />
          <div className="row mb-3" style={{ paddingLeft: "20px" }}>
            <div className="col-md-6">
              <button className="btn btn-dark" onClick={handleCancel}>
                Cancel
              </button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-dark" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateParcel;
