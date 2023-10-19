import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faReply } from '@fortawesome/free-solid-svg-icons';
import "./CSS/ReviewsIndex.css";

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
          <div className="review">
            <div className="reviewer-header">
              <div className="reviewer-photo">
                {review.reviewer.profilePhotoUrl ? (
                  <img className="reviewer-photo" src={review.reviewer.profilePhotoUrl} alt="Profile" />
                ) : (
                  <div>
                    <img className="reviewer-photo" src="https://resizing.flixster.com/OS6NXmHya5eQK74GHiJOXLmwk9g=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19352_p_v8_af.jpg" alt="Default Profile" />
                    {(!review.reviewer.profilePhotoUrl && !review.reviewer.profilePhotoUrl) && (
                      <div className="initials">
                        {console.log('Initials:', getInitials(review.reviewer.name))}
                        {getInitials(review.reviewer.name)}
                      </div>
                    )}
                  </div>
                )}
                </div>
                <div className="rating">
                  {renderPaws(review.rating)}
                </div>
              </div>
              <div className="reviewer-comment">
                <p>{review.comment}</p>
              </div>
              <div className="reviewer-name">
                <p>- {review.reviewer.name}</p>
              </div>
          
          </div>   
            {review.admin_comments && (

              <div className="admin-comments">
                <div className="reply-icon">
                  <FontAwesomeIcon icon={faReply} className="fa-solid fa-reply" rotation={180} />
                </div>
                  {review.admin_comments.map((adminComment) => (
                    <div key={adminComment.id}>
                        
                      <div className="admin-header">
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
                  
                      <div className="admin-name">
                      <p>- {adminComment.user.full_name}</p>
                      </div>
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

