import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Review = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((store) => store.review);
  useEffect(() => {
    const getData = () => {
      dispatch({ type: "GET-REVIEW-SAGA" });
    };
    getData();
  }, [dispatch]);
  return (
    <div>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              <li>{review.month}</li>
              <li>{JSON.stringify(review.review)}</li>
              <li>{review.name}</li>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Review;
