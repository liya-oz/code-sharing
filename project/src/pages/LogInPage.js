// LoginPage.js
import React from "react";
import LogIn from "../components/LogIn";
import loginImage from "../images/login.avif"
import "./LogInPage.css"


const LoginPage = () => {
  const handleLogin = (formData) => {
    console.log("Login data:", formData);
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <LogIn onLogin={handleLogin} />
      <img src={loginImage} alt="login" className="logInImg" />
    </div>
  );
};

export default LoginPage;
