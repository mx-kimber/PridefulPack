export function PhotosShow(props) {
  return (
    <div>

      <p>Pet Names: {props.photo.pet_name}</p>
      <p>Caption: {props.photo.caption}</p>
        <div className="gallery-container">
          <img
            className="pet-photo-gallery"
            src={props.photo.pet_photo}
            alt="Pet Photo"/>
        </div>
    </div>
  );
}