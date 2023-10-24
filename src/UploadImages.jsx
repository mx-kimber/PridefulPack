import React, { useState, useEffect } from 'react';

export function UploadImages() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;

    const newImageUrls = [];
    images.forEach((image, index) => {
      newImageUrls.push(URL.createObjectURL(image));
    });
    setImageURLs(newImageUrls);
  }, [images]);

  const onImageChange = (event) => {
    const file = event.target.files[0];
    setImages([...images, file]);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onImageChange} />
      {imageURLs.map((imageSrc, index) => (
        <img key={index} src={imageSrc} alt={`Image ${index}`} />
      ))}
    </div>
  );
}

export default UploadImages;
