import React from "react";
import "./ShareLinkBox.css";
import Button from "./Button";

const ShareLinkBox = ({ link, onClose }) => {
  return (
    <div className="share-link-box">
      <p>Copy the link:</p>
      <input type="text" value={link} readOnly />
      <Button onClick={onClose} label={"Close"} />
    </div>
  );
};

export default ShareLinkBox;
