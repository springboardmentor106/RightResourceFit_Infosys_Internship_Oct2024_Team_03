import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Reset error and simulate submission
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h3>Register</h3>
        <h1>Start for free Today</h1>
        <p>Access to all features. No credit card required.</p>

        {submitted ? (
          <div className="success-message">
            <h2>Registration Successful!</h2>
            <p>Welcome, {formData.fullName}!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                placeholder="Steven Job"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="stevenjob@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Username *</label>
              <input
                type="text"
                name="username"
                placeholder="stevenjob"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Re-Password *</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="form-group terms-policy">
              <input type="checkbox" required />{" "}
              <label>
                Agree to our <a href="/">terms and policy</a>
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Submit & Register
            </button>

            <p className="sign-in-link">
              Already have an account? <a href="/">Sign in</a>
            </p>
          </form>
        )}
      </div>

      <div className="signup-image">
        {/* You can add an image or illustration here */}
        <img src="path_to_your_image" alt="Signup Illustration" />
      </div>
    </div>
  );
};

export default Signup;
