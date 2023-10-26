import "./PhotoGallery.css"

export function GalleryView(props) {
  return (
    
      // <div className="pet-name">
      //   Pet Name: {props.photo.pet_name}
      //   <div className="caption">
      //     Caption: {props.photo.caption}
      //   </div>
      
      <div className="gallery-show-container">
        <div className="pet-photo-gallery">
        <img
         src={props.photo.pet_photo}
         alt="Pet Photo"/>
      </div>
    </div>
  );
}
