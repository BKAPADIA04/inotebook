import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const [credentials, setCredentials] = useState({ name: "",email: "", password: "",cpassword: "" });

  let navigate = useNavigate();

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const host = "http://localhost:8080/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(credentials.password);
    const url = `${host}api/user_auth/`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:credentials.name,
        emailid: credentials.email,
        password: credentials.password,
      }), // body data type must match "Content-Type" header
    });

    const data = await response.json(); // parses JSON response into native JavaScript objects
    console.log(data);

    if (data.success === true) {

      setCredentials({ name:"",email: "", password: "", cpassword: ""});
      localStorage.setItem("token", data.authToken);
      navigate("/");
    } else {
      alert("Login with correct credentials");
    }
  };

    let validEmail = (email) => {
        const emailFormat =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return emailFormat.test(email);
      }
        let isPasswordEmpty = (password) => {
          return password.length === 0;
        }


  return (
    <form id="form_login" onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail"
          name="name"
          aria-describedby="emailHelp"
          placeholder="Enter name"
          onChange={handleChange}
          value={credentials.name}
          required
        ></input>
        </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={handleChange}
          value={credentials.email}
          required
        ></input>
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={credentials.password}
          required
        ></input>
      </div>
      <button
        disabled={
          !validEmail(credentials.email) || isPasswordEmpty(credentials.password)
        }
        type="submit"
        className="btn btn-primary"
      >
        Sign Up
      </button>
    </form>
  )
}
