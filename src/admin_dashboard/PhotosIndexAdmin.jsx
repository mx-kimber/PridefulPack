import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import "./AdminGallery.css";

export function PhotosIndexAdmin(props) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleImageClick = (photo) => {
    props.onShowPhoto(photo);
  };

  const handleDestroy = (photo) => {
    setSelectedPhoto(photo);
  };

  const confirmDestroy = () => {
    props.onDestroyPhoto(selectedPhoto);
    setSelectedPhoto(null); 
  };

  const cancelDestroy = () => {
    setSelectedPhoto(null); 
  };

  return (
    <div>
      <div className="admin-pet-gallery">
        {props.photos.map((photo) => (
          <div key={photo.id} className="grid-item">
            <FontAwesomeIcon
              icon={faCircleMinus}
              className="trash-icon"
              onClick={() => handleDestroy(photo)}
            />
            <FontAwesomeIcon
              className="edit-photo-icon"
              icon={faPenToSquare}
              onClick={() => handleImageClick(photo)}
            />
            <img
              src={photo.image_url}
              alt={photo.pet_name}
              className="pet-index-image"
            />
          </div>
        ))}
      </div>
    
      {selectedPhoto && (
        <div className="confirmation-modal">
          <p>Are you sure you want to delete this photo?</p>
          <button onClick={confirmDestroy}>Yes</button>
          <button onClick={cancelDestroy}>No</button>
        </div>
      )}
    </div>
  );
}
