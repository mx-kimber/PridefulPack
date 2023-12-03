import React, { useState, useRef } from 'react';
import axios from 'axios';

export function AvatarUpload() {
  const [imageSelected, setImageSelected] = useState(null);
  const [cloudinaryUrl, setCloudinaryUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImageSelected(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCloudinaryUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('file', imageSelected);

    try {
      const response = await axios.post('http://localhost:3000/avatar_upload.json', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <div>
        <input
          type="file"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <button onClick={handleButtonClick}>Change profile photo</button>
      </div>
      <div>
        {cloudinaryUrl && (
          <img 
            src={cloudinaryUrl} 
            alt="Preview"
          />
        )}
      </div>
      {imageSelected && (
        <button onClick={uploadImage}> Upload Image </button>
      )}
    </div>
  )
}

export default AvatarUpload;