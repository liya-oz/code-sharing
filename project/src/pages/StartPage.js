import React from "react";
import { Link } from "react-router-dom";
import startImage from "../images/1.jpg";
import Button from "../components/Button";
import "./StartPage.css";
import Navbar from "../components/Navbar";

const StartPage = () => {
  return (
    <div>
      <Navbar />
      <div className="start-page-container">
        <h2 className="start-page-header">
          Welcome to the Code Sharing Platform!
        </h2>
        <p className="start-page-paragraph">
          Share your code snippets and explore the creations of the community.
        </p>
        <Link to="/main">
          <Button label={"Get Started"} />
        </Link>
        <img src={startImage} alt="sharing-code" />
      </div>
    </div>
  );
};
export default StartPage;
