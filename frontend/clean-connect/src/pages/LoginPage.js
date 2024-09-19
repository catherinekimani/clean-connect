import React from "react";
import LoginForm from "../components/LoginForm";
import "../styles/loginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-wrapper">
          <h1>Welcome to Clean Connect</h1>
          <LoginForm />
          <p className="signup-link">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
