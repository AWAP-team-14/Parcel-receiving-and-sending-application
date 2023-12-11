import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
    });

    const json = await response.json();

    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem("token", json.token);
      // Storing user object in local storage
      localStorage.setItem("user", json.user);
      localStorage.setItem("mobile", json.mobile);
      localStorage.setItem("username", json.username);

      navigate("/");
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
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <form
          className="w-50 m-auto mt-5 border bg-dark border-success rounded"
          onSubmit={handleSubmit}
        >
          <div className="m-3">
            <label htmlFor="username">Email address</label>
            <input
              type="email"
              className="form-control"
              name="username"
              id="username"
              value={credentials.username}
              onChange={onChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="m-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={credentials.password}
              onChange={onChange}
              name="password"
            />
          </div>

          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <div className="m-3">
            <label>
              <br />
              New User? Click New user to Sign Up
              <Link to="/signup"> New User</Link>
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
