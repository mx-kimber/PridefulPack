import React from 'react';

export function ReviewsIndex(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <div key={review.id}>
          <p>Rating: {review.rating}</p>
          <p>Comment: {review.comment}</p>
          <p>Name: {review.reviewer.name}</p>
          <p>Created At: {review.created_at}</p>

          {review.admin_comments && (
            <div>
              <h3>Associated Admin Comments</h3>
              {review.admin_comments.map((adminComment) => (
                <div key={adminComment.id}>
                  <p>{adminComment.comment}</p>
                  <p>User: {adminComment.user.full_name}</p>
                  <p>Created At: {adminComment.user.created_at}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
