import "./PhotoGallery.css"

export function PhotosIndex(props) {

  const handleImageClick = (photo) => {
    props.onShowPhoto(photo);
  };

  return (
      <div className="slider-container">
        {props.photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.image_url}
              alt={photo.pet_name}
              className="thumbnail"
              onClick={() => handleImageClick(photo)}
            />
          </div>
        ))}
      </div>
    
  );
}
