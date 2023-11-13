import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import "./AdminGallery.css";

export function PhotosIndexAdmin(props) {

  const handleImageClick = (photo) => {
    props.onShowPhoto(photo);
  };

  const handleDestroy = (photo) => {
    props.onDestroyPhoto(photo);
  };

  return (
    <div className="admin-gallery-container">
      <div className="admin-pet-gallery">

        {props.photos.map((photo) => (
          <div key={photo.id} className="grid-item">
           
            <FontAwesomeIcon 
              icon={faCircleMinus} 
              className="trash-icon" 
              onClick={() => handleDestroy(photo)}/> 
            
                
            <FontAwesomeIcon 
               className="edit-photo-icon" 
               icon={faPenToSquare} 
               onClick={() => handleImageClick(photo)}/>
             
            <img
              src={photo.image_url}
              alt={photo.pet_name}
              className="pet-index-image"
            />

          </div>
        ))}
      </div>
    </div>
  );
}
