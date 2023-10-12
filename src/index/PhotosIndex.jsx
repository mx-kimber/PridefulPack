import './CSS/PhotosIndex.css';

export function PhotosIndex(props) {
  return (
    <div className="container-wrapper">
      <div className="photos-index-container">
        {props.photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img
              src={photo.pet_photo}
              alt={photo.pet_name} 
              className="pet-thumbnail" 
            />
            <button onClick={() => props.onShowPhoto(photo)}>PhotosShow - Modal</button>
          </div>
        ))}
      </div>
    </div>
  );
}
