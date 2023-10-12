import "./CSS/PhotosShow.css"

export function PhotosShow(props) {
  return (
    <div>
      <h1>Photo information</h1>
      <p>Pet Name: {props.photo.pet_name}</p>
      <img
      className="pet-photo-show"
      src={props.photo.pet_photo}
      alt="Pet Photo"
    />
      <p>Caption: {props.photo.caption}</p>
    </div>
  );
}