import "./AdminGallery.css";

export function PhotosIndexAdmin(props) {

  const handleImageClick = (photo) => {
    props.onShowPhoto(photo);
  };

  return (
    <div className="admin-pet-gallery">
      
        {props.photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.image_url}
              alt={photo.pet_name}
              className="pet-index-image"
              onClick={() => handleImageClick(photo)}
            />
          </div>
        ))}
    </div>

  );
}