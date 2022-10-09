import React from "react"
import Google from "./GoogleButton";
export default function Form() {
  const [formData, setFormData] = React.useState(
    {
      name: "",
      email: "",
      password: "",
      ConPassword: ""
    }
  )
  const handleChange = (event) => {
    const{name,value} = event.target;
    setFormData(e => {
      return{
        ...e,
        [name]: value
      }
    })
  }
  const handleSubmit = (e) => {
   
  }
  return (
    <>
    
      <form onSubmit={handleSubmit}>
      <Google />
        {/* Name input */}
        <div className="form--section">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
            value={formData.name}
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
          ></input>
        </div>
        {/* Password Input */}
        <div className="form--section">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Type Your Password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          ></input>
        </div>
        {/* Confirm Password Input */}
        <div className="form--section">
          <label htmlFor="ConPassword">Confirm Password</label>
          <input 
            type="password"
            placeholder="Confirm Your Password"
            onChange={handleChange}
            name="ConPassword"
            value={formData.ConPassword} /></div>
        <button>Sign Up</button>
      </form>
      
    </>
  );
}
