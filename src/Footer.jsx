import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Modal } from "./Modal";
import axios from 'axios';
import { UploadImages } from "./UploadImages";

export function Footer() {
  const [isImagesUploadVisible, setIsImagesUploadVisible] = useState(false);
  const [photos, setPhotos] = useState([]);

  const handleImagesUpload = () => {
    axios.post("http://localhost:3000/photos.json").then((response) => {
      setIsImagesUploadVisible(false);
      setPhotos([...photos, response.data]);
      window.location.reload();
    });
  }

  const handleClose = () => {
    setIsImagesUploadVisible(false);
  };

  const handleOpenImagesUpload = () => {
    setIsImagesUploadVisible(true);
  };

  return (
    <footer>
      <FontAwesomeIcon
        icon={faCamera}
        size="lg"
        className="camera-icon"
        onClick={handleOpenImagesUpload}
      />
      <Modal
        show={isImagesUploadVisible}
        onClose={handleClose}>
        <UploadImages
          onImagesUpload={handleImagesUpload}
        />
      </Modal>
    </footer>
  );
}