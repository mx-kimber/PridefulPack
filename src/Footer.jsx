import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Modal } from "./Modal";
// import { UploadForm } from "./UploadForm"
import { UploadImages } from "./UploadImages";
// import { ImageUploader } from './ImageUploader';

export function Footer() {
  const [isImagesUploadVisible, setIsImagesUploadVisible] = useState(false);
  
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
        {/* <UploadForm /> */}
          <UploadImages />
        {/* <ImageUploader /> */}
      </Modal>
    </footer>
  );
}