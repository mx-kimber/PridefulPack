import './CSS/PhotosIndex.css';

export function PhotosIndex(props) {
  return (
    <div className="container-wrapper">
      <div className="photos-index-container">
        {props.photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            {/* <h2>{photo.pet_name}</h2> */}
            <img
              src={photo.pet_photo}
              alt={photo.pet_name} 
              className="pet-photo" 
            />
            {/* <p>{photo.caption}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
