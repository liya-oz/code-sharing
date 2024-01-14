import React from "react";
import LogIn from "../components/LogIn";
import loginImage from "../images/login.avif"
import "./LogInPage.css"
import { Link } from "react-router-dom";


const LoginPage = () => {
  const handleLogin = (formData) => {
    console.log("Login data:", formData);
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <LogIn onLogin={handleLogin} />
      <img src={loginImage} alt="login" className="logInImg" />
      <p>
        Don't have an account yet? 
        <Link to="/signup" style={{ textDecoration: "none" }}> <span>Sign up!</span></Link> 
      </p>
    </div>
  );
};

export default LoginPage;
