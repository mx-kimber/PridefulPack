import React, { useState } from 'react'
import axios from 'axios';

export function AvatarUpload() {

  const [imageSelected, setImageSelected] = useState(null);
  const [cloudinaryUrl, setCloudinaryUrl] = useState(null);

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
    formData.append("file", imageSelected);

    try {
      const response = await axios.post("http://localhost:3000/avatar_upload.json", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <h2>Implementing Cloudinary</h2>
      
      </div>
      <div>
        <input
          type="file"
          onChange={handleImageChange}
        />
        <button onClick={uploadImage}> Upload Image </button>
      </div>
      <div>
        {cloudinaryUrl && (
          <img 
            src={cloudinaryUrl} 
            alt="Preview"
          />
        )}
      </div>
    </div>
  )
}

export default AvatarUpload;