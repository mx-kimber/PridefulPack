import React from 'react';

export function ReviewsIndex(props) {
  const renderStars = (rating) => {
    const maxRating = 5;
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      const starClassName = i <= rating ? 'star filled' : 'star';
      stars.push(<span key={i} className={starClassName}>&#9733;</span>);
    }
    return stars;
  };

  return (
    <div className="main-container">
      <h1>Reviews</h1>
      {props.reviews.map((review) => (
        <div key={review.id}>
          <p>Rating: {renderStars(review.rating)}</p>
          <p>{review.comment}</p>
          <p>{review.reviewer.name}</p>
          <p>{review.created_at}</p>

          {review.admin_comments && (
            <div>
              <h3>Associated Admin Comments</h3>
              {review.admin_comments.map((adminComment) => (
                <div key={adminComment.id}>
                  <p>{adminComment.comment}</p>
                  <p>{adminComment.user.full_name}</p>
                  <p>{adminComment.user.created_at}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
