// GalleryView.js
import React from 'react';
import "./PhotoGallery.css";

export function GalleryView(props) {
  return (
    <div className="gallery-container">
      <div className="pet-name">
        Pet Name: {props.photo.pet_name}
      </div>
      <div className="caption">
        Caption: {props.photo.caption}
      </div>
      <div className="gallery-show-container">
        <div className="pet-photo-gallery">
          <div className="image-container">
            <img
              src={props.photo.image_url}
              alt="Pet Photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

