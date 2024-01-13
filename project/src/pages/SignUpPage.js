import React from "react";
import SignUp from "../components/SignUp";
import "./SignUpPage.css"
import signupImage from "../images/sign-up.jpeg"

const SignUpPage = () =>{
const handleSignup = (formData) => {
  console.log("Signup data:", formData);
};

return (
  <div className="container">
    <h1>Sign Up For Code Sharing</h1>
    <p>
      Create free account now.
    </p>
    <SignUp onSignup={handleSignup} />
    <img src={signupImage} alt="sharing-code" />
  </div>
);
}
export default SignUpPage;