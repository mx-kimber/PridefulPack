import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'; // Import the edit icon
import "./AdminGallery.css";

export function PhotosIndexAdmin(props) {

  const handleImageClick = (photo) => {
    props.onShowPhoto(photo);
  };

  return (
    <div className="admin-gallery-container">
      <div className="admin-pet-gallery">

        {props.photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.image_url}
              alt={photo.pet_name}
              className="pet-index-image"
            />
            <div className="admin-pet-footer" onClick={() => handleImageClick(photo)}>
              <FontAwesomeIcon icon={faPencilAlt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}