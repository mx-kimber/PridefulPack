import "./AdminGallery.css";

export function PhotosShow(props) {
  return (
    <div>

      <p>Names/caption #1:{props.photo.pet_name}</p>
      <p>Caption #2: {props.photo.caption}</p>
        <div className="pet-show-container">
          <img
            className="pet-show-image"
            src={props.photo.image_url}
            alt="Pet Photo"/>
        </div>
    </div>
  );
}