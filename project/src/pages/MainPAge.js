import React, { useState } from "react";
import CodeBox from "../components/CodeBox";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  const [code, setCode] = useState("");

  return (
    <div className="container">
      <div className="btn-container">
        <Link to="/" >
          <Button label="Home" className="home-button" />
        </Link>
        <Button label="Save" />
        <Button label="Share" />
      </div>
      <CodeBox code={code} onUpdateCode={setCode} />
    </div>
  );
};

export default MainPage;
