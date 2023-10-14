import "./CSS/PhotosShow.css"

export function GalleryView(props) {
  return (
    <div>
      <div className="photo-name-caption-big">
        <p>Pet Name: {props.photo.pet_name}</p>
        <div className="gallery-show-container">
          <img
            className="pet-photo-gallery"
            src={props.photo.pet_photo}
            alt="Pet Photo"
          />
        </div>
        <p>Caption: {props.photo.caption}</p>
      </div>
      
    </div>
  );
}
