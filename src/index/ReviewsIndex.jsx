import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faReply } from '@fortawesome/free-solid-svg-icons';
import "./CSS/ReviewsIndex.css";
import { formatDistanceToNow } from 'date-fns';

export function ReviewsIndex(props) {
  const renderPaws = (rating) => {
    const paws = [];
    for (let i = 1; i <= rating; i++) {
      paws.push(
        <span key={i}>
          <FontAwesomeIcon icon={faPaw} className="paw-filled" />
          {i < rating && ' '}
        </span>
      );
    }
    return paws;
  }

  const getInitials = (name) => {
    const nameArray = name.split(' ');
    if (nameArray.length >= 2) {
      return nameArray[0].charAt(0) + nameArray[nameArray.length - 1].charAt(0);
    } else if (nameArray.length === 1) {
      return nameArray[0].charAt(0);
    }
    return '';
  }

  return (
    <div>
      <h1>Reviews</h1>
     
      {props.reviews.map((review) => (
        <div key={review.id}>
          <div className="review-container">
            <div className="reviewer-header">
              <div className="rating-and-time-container">
                <div className="paws-filled">
                  {renderPaws(review.rating)}
                </div>
              <div className="timestamp">
                {formatDistanceToNow(new Date(review.created_at))} ago
              </div>
            </div>
            <div className="reviewer-photo">
              {review.reviewer.profilePhotoUrl ? (
                <img className="reviewer-photo" src={review.reviewer.profilePhotoUrl} alt="Profile" />
              ) : (
                <div className="initials">
                  {getInitials(review.reviewer.name)}
                </div> 
              )}
              
            </div>
            
            
            
              
            </div>
            <div className="review">
            {review.comment}
            </div>
            
            <div className="reviewer-name">
              - {review.reviewer.name}
            </div>
          </div>
            
            {review.admin_comments && (
              <div>
                <div className="admin-reply-container">
                  {review.admin_comments.map((adminComment) => (
                    <div key={adminComment.id}>

                      <div className="admin-header">
                        <FontAwesomeIcon icon={faReply} className="reply-icon" rotation={180} />   
                          {adminComment.user.profile_photo ? (
                          <img className="admin-profile-photo" src={adminComment.user.profile_photo} alt="AdminPhoto" />
                        ) : (
                        <div className="initials admin-profile-photo">
                          {getInitials(adminComment.user.full_name)}
                        </div>
                        )}
                      </div>

                      <div className="admin-reply">
                        {adminComment.comment}
                      </div>
                      
                      <div className="admin-name">
                        - {adminComment.user.full_name}
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

