import React, { useState } from 'react';
import "./AdminGallery.css";

export function PhotosShow(props) {
  const [name, setName] = useState(props.photo.pet_name || '');
  const [caption, setCaption] = useState(props.photo.caption || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      pet_name: name,
      caption: caption,
    };
    props.onUpdatePhoto(props.photo.id, params, () => {
      setName('');
      setCaption('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>{props.photo.pet_name}</p>
        <p>{props.photo.caption}</p>
        <div className="pet-show-container">
          <img
            className="pet-show-image"
            src={props.photo.image_url}
            alt="Pet Photo"
          />
        </div>
        <div>
          <label>
            Name:
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="pet_name"
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Caption:
            <input
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              name="caption"
              type="text"
            />
          </label>
        </div>
        <button type="submit">Update photo</button>
      </div>
    </form>
  );
}
