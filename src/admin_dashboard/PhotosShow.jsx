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

  const handleDestroy = () => {
    props.onDestroyPhoto(props.photo);
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
            Names:  
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
      <div>
        <button 
          onClick={handleDestroy}>
            Destroy photo
        </button>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          id="setOnHomePage"
          name="setOnHomePage"
        />
        <label htmlFor="setOnHomePage">Set as home page image</label>
      </div>
      note to self: handle when the checkbox is checked. ...boolean. add "set_main" column to backend and prop to landing component. If multiple for auto or randomized slides, put a max number of true allowed...refereance LatestImage component and make setMain component.
    </form>
  );
}
