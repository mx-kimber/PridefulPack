import React from 'react';
import "./CSS/ReviewsIndex.css"

export function ReviewsIndex(props) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<span key={i} className="star filled" role="img" aria-label="star">&#9733;</span>);
    }
    return stars;
  };

  return (
    <div>
      <h1>Reviews</h1>
      {props.reviews.map((review) => (
        <div key={review.id}>
          <div className="review">
            <div className="reviewer-photo-container">
              <img className="reviewer-photo" src={review.reviewer.profilePhotoUrl} alt="Profile" />
            </div>
            <div className="rating">
              {renderStars(review.rating)}
            </div>
            <div className="comment">
              <p>{review.comment}</p>
            </div>
            <div className="review-details-name">
              <p>- {review.reviewer.name}</p>
            </div>
          </div>
          {review.admin_comments && (
            <div className="admin-comments">
              <h3>Associated Admin Comments</h3>
              {review.admin_comments.map((adminComment) => (
                <div key={adminComment.id}>
                  <div className="review">
                    <div className="reviewer-photo-container">
                      <img className="reviewer-photo" src={adminComment.user.profilePhotoUrl} alt="Profile" />
                    </div>
                    <div className="review-details-name">
                      <p>- {adminComment.user.full_name}</p>
                    </div>
                  </div>
                  <div className="comment">
                    <p>{adminComment.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
