import React, { useState, useEffect } from "react";
import "./CodeDisplayPage.css"
import useStarRating from "../custom-hook/useStarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CodeDisplayPage = () => {
    const [code, setCode] = useState("");
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split("/");

    // Get the UUID from the parts array
    const uuid = urlParts[urlParts.length - 1];

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

    const { rating, userRated, handleStarClick } = useStarRating(uuid);


  return (
    <div className="share-code-container">
      <h1>The Shared Code :</h1>
      <pre className="share-code-box">{code}</pre>

      {userRated ? (
        <p>You have already rated this code.</p>
      ) : (
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((starValue) => (
            <FontAwesomeIcon
              key={starValue}
              icon={faStar}
              className={starValue <= rating ? "active" : ""}
              onClick={() => handleStarClick(starValue)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CodeDisplayPage;
