export function PhotosIndexAdmin(props) {

  const handleImageClick = (photo) => {
    props.onShowPhoto(photo);
  };

  return (
      <div >
        {props.photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.pet_photo}
              alt={photo.pet_name}
              className="thumbnail"
              onClick={() => handleImageClick(photo)}
            />
          </div>
        ))}
      </div>
    
  );
}