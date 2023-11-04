import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./UploadImages.css";

export function UploadImages() {

  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;

    const newImageUrls = [];
    images.forEach((image) => {
      newImageUrls.push(URL.createObjectURL(image));
    });
    setImageURLs(newImageUrls);
  }, [images]);

  const onImageChange = (event) => {
    const file = event.target.files[0];
    setImages([...images, file]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();

      images.forEach((image, index) => {
        formData.append("photo[image]", image);
        
      });

      await axios.post('http://localhost:3000/photos.json', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      window.location.reload();
      console.log('Images uploaded successfully.');

    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onImageChange} />
      {imageURLs.map((imageSrc, index) => (
        <img key={index} src={imageSrc} alt={`Image ${index}`} />
      ))}
      <button onClick={handleUpload}>Upload Images</button>
    </div>
  );
}

export default UploadImages;
