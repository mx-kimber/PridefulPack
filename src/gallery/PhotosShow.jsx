import "./PhotosShow.css"

export function PhotosShow(props) {
  return (
    <div>

      <p>Pet Name: {props.photo.pet_name}</p>
      <div className="gallery-container"><img
      className="pet-photo-gallery"
      src={props.photo.pet_photo}
      alt="Pet Photo"
    /></div>
      <p>Caption: {props.photo.caption}</p>
    </div>
  );
}