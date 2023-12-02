import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        mobile: credentials.mobile,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      navigate("/home");
    } else {
      alert("Enter Valid Credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="container">
        <form
          className="w-50 m-auto mt-5 border bg-dark border-success rounded"
          onSubmit={handleSubmit}
        >
          <div className="m-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
              aria-describedby="nameHelp"
              required
            />
          </div>
          <div className="m-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="m-3">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              name="mobile"
              value={credentials.mobile}
              onChange={onChange}
              aria-describedby="mobileHelp"
              required
            />
            <small id="mobileHelp" className="form-text text-muted">
              Enter a mobile number starting with +358.
            </small>
          </div>
          <div className="m-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              value={credentials.password}
              onChange={onChange}
              name="password"
              aria-describedby="passwordHelp"
              title="Password must be at least 8 characters long and should contain at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol."
              required
            />
            <small id="passwordHelp" className="form-text text-muted">
              Password must be at least 8 characters long and should contain at
              least 1 lowercase, 1 uppercase, 1 number, and 1 symbol.
            </small>
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <div className="m-3">
            <label>
              <br />
              If Customer? Click Login for Customer login
              <Link to="/login"> Login</Link>
              <br />
              Or Click to go Home
              <Link to="/home"> Home</Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
