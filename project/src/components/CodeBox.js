import React from "react";
import "./CodeBox.css";

const CodeBox = ({ code, onUpdateCode }) => {
  const handleCodeChange = (event) => {
    onUpdateCode(event.target.value);
  };

  return (
    <textarea
      className="code-box"
      value={code}
      onChange={handleCodeChange}
      placeholder="Write or paste your code here..."
      rows={24}
      cols={150}
    />
  );
};

export default CodeBox;
