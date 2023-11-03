import React, { useContext } from 'react'
import { UploadContext } from './UpLoadContext';

function UploadForm() {
  const { latestImage, setLatestImage } = useContext(UploadContext);

  // function handleSubmit(event) {

  // }

  // function sendToRails(data) {

  // }  
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