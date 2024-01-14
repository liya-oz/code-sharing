import React from "react";
import SignUp from "../components/SignUp";
import "./SignUpPage.css"
import { Link } from "react-router-dom";
import signupImage from "../images/sign-up.jpeg"

const SignUpPage = () =>{
const handleSignup = (formData) => {
  console.log("Signup data:", formData);
};

return (
  <div className="container">
    <h1>Sign Up For Code Sharing</h1>
    <p>Create free account now.</p>
    <SignUp onSignup={handleSignup} />
    <p>
      Already have an account?
      <Link to="/login" style={{ textDecoration: "none" }}>
        <span> Log In</span>
      </Link>
    </p>
    <SignUp onSignup={handleSignup} />
    <img src={signupImage} alt="signup" className="signUpImg"/>
  </div>
);
}
export default SignUpPage;