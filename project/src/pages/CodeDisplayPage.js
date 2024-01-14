import React, { useState, useEffect } from "react";
import "./CodeDisplayPage.css"

const CodeDisplayPage = () => {
  const [code, setCode] = useState("");
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split("/");

    // Get the UUID from the parts array
    const uuid = urlParts[urlParts.length - 1];

    console.log("UUID:", uuid);
  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(`http://localhost:4000/code/${uuid}`);
        const data = await response.json();
        setCode(data.code);
      } catch (error) {
        console.error("Error fetching code:", error);
      }
    };

    fetchCode();
  }, [uuid]);

  return (
    <div className="share-code-container">
      <h1>The Shared Code :</h1>
      <div className="share-code-box">{code}</div>
    </div>
  );
};

export default CodeDisplayPage;
