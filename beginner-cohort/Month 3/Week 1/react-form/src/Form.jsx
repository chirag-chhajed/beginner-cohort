import React from "react";
import Google from "./GoogleButton";
export default function Form() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((e) => {
      return {
        ...e,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
      return;
    }
  };
 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Google />
        {/* Name input */}
        <div style={formSectionColor} className="form--section">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
            value={formData.name}
            required
          ></input>
        </div>
        {/* Email input */}
        <div className="form--section">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter you mail"
            onChange={handleChange}
            name="email"
            value={formData.email}
            required
          ></input>
        </div>
        {/* Password Input */}
        <div className="form--section">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Type Your Password"
            onChange={handleChange}
            name="password"
            value={formData.password}
            required
          ></input>
        </div>
        {/* Confirm Password Input */}
        <div className="form--section">
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            name="passwordConfirm"
            value={formData.passwordConfirm}
            required
          />
        </div>
        <button>Sign Up</button>
      </form>
      <button className="theme">Theme Change</button>
    </>
  );
}
