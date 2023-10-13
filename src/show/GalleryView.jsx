import "./CSS/PhotosShow.css"

export function GalleryView(props) {
  return (
    <div>
      <div>
        <h1>Photo information</h1>
        <p>Pet Name: {props.photo.pet_name}</p>
        <div className="photo-container">
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
