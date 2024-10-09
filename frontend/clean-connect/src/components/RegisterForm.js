import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/registerForm.css";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isServiceProvider, setIsServiceProvider] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const formData = new FormData();
    formData.append("username", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone_number", phoneNumber);
    formData.append("is_service_provider", isServiceProvider);
    formData.append("is_client", isClient);
    if (profileImage) {
      formData.append("profile_image", profileImage);
    }

    console.log("FormData to be sent:", formData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("User registered successfully:", response.data);

      navigate("/login");
    } catch (error) {
      console.error(
        "There was an error registering the user:",
        error.response.data
      );
      setErrorMessage("Failed to register. Please try again.");
    }
  };

  return (
    <div className="register-form-wrapper">
      <form onSubmit={handleSubmit} className="register-form">
        <div className="input-group">
          <FaUser className="icon" />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <FaPhone className="icon" />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>
            <input
              type="checkbox"
              checked={isServiceProvider}
              onChange={(e) => setIsServiceProvider(e.target.checked)}
            />
            Register as Service Provider
          </label>
        </div>
        <div className="input-group">
          <label>
            <input
              type="checkbox"
              checked={isClient}
              onChange={(e) => setIsClient(e.target.checked)}
            />
            Register as Client
          </label>
        </div>
        <div className="input-group">
          <input
            type="file"
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
