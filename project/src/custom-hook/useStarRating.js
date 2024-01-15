
import { useState, useEffect } from "react";

const useStarRating = (uuid) => {
  const [rating, setRating] = useState(0);
  const [userRated, setUserRated] = useState(false);

  useEffect(() => {
    // Check if the user has already rated this code
    const userRating = localStorage.getItem(`rating_${uuid}`);
    if (userRating) {
      setRating(parseInt(userRating, 10));
      setUserRated(true);
    }
  }, [uuid]);

  const handleStarClick = (starValue) => {
    if (!userRated) {
      setRating(starValue);
      setUserRated(true);
      // Store user rating in local storage
      localStorage.setItem(`rating_${uuid}`, starValue);
      console.log(`You gave a rating of ${starValue}`);

    }
  };

  return { rating, userRated, handleStarClick };
};

export default useStarRating;
