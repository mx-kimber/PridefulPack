import "./PhotoGallery.css"

export function GalleryView(props) {
  return (
    <div>
      <div className="pet-name">
        Pet Name: {props.photo.pet_name}
        <div className="caption">
          Caption: {props.photo.caption}
        </div>
      </div>
      <div className="gallery-show-container">
        <img
         className="pet-photo-gallery"
         src={props.photo.pet_photo}
         alt="Pet Photo"/>
      </div>
    </div>
  );
}
