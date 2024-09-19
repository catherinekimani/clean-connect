import React from "react";
import RegisterForm from "../components/RegisterForm";
import "../styles/registerPage.css";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-form-wrapper">
          <h1>Create Your Account</h1>
          <RegisterForm />
          <p className="login-link">
            Already have an account? <a href="/">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
