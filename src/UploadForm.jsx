import React, { useContext } from 'react'
import { UploadContext } from './UpLoadContext';

function UploadForm() {

  const { latestImage, setLatestImage } = useContext(UploadContext);

  function handleSubmit(event) {
    event.preventDefault();
      const fileData = new FormData();

      fileData.append("photo[image]", event.target.image.files[0]);
      // change number for images if multiple ^
      sendToRails(fileData);
  }

  function sendToRails(fileData) { 
    fetch("http://localhost:3000/photos.json", {
      method: "POST",
      body: fileData
    })
      .then(response => response.json())
      .then(fileData => {
        setLatestImage(fileData.image_url);
      })
      .catch((error) => console.error(error));
  }
  return (
    <div>
      <h1>Upload Form</h1>
      <form onSubmit={(file) => handleSubmit(file)}>
          <label htmlFor="pet_name">Pet name:</label>
          <input type="text" name="pet_name" id="pet_name" /> 
          <br />
          <label htmlFor="caption">Caption:</label>
          <input type="text" name="caption" id="caption" /> 
          <br />
          <label htmlFor="image">Image</label>
          <input type="file" name="image" id="image" /> 
          {/* Note to self: include 'multiple' above for multiple file uploads */}
          <br />
          <button type="submit">Upload Image</button>
      </form>
    </div>
  ); 
}

export default UploadForm