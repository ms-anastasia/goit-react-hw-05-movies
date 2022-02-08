import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviews } from "../../services/api";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchReviews(movieId)
      .then((data) => {
        if (data.results.length) {
          return setReviews(data.results);
        } else {
          throw new Error("Information is not found");
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, [movieId]);

  return (
    <>
      <h2>Reviews</h2>
      {error && <p>There are no reviews for this movie.</p>}
      <ul>
        {reviews.map((review, index) => {
          return (
            <li key={index}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
              <p>
                <i>{review.created_at}</i>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
