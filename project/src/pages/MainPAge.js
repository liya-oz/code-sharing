import React, { useState } from "react";
import CodeBox from "../components/CodeBox";
import Button from "../components/Button";
import ShareLinkBox from '../components/ShareLinkBox'
import "./MainPage.css";

const MainPage = () => {
  const [code, setCode] = useState("");
  const [shareLink, setShareLink] = useState("");
  const [showLinkBox, setShowLinkBox] = useState(false);


  const handleShare = async () => {
    try {
      const response = await fetch("http://localhost:4000/code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      const uuid = data.uuid;
      const link = `http://localhost:3000/code/${uuid}`;
      setShareLink(link);
      setShowLinkBox(true);

      console.log(shareLink);
    } catch (error) {
      console.error("Error sharing code:", error);
    }
  };
    const handleCloseLinkBox = () => {
      setShowLinkBox(false);
    };

  return (
    <div>
      <div className={`container ${showLinkBox ? "blur" : ""}`}>
        <div className="btn-container">
          <Button label="Share" onClick={handleShare} />
        </div>
        <CodeBox code={code} onUpdateCode={setCode} />
      </div>
      {showLinkBox && (
        <ShareLinkBox link={shareLink} onClose={handleCloseLinkBox} />
      )}
    </div>
  );
};

export default MainPage;
