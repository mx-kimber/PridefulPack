import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Modal } from "./Modal";
import { UploadImages } from "./UploadImages";
import { UserContext } from './UserContext';
import "./Footer.css"

export function Footer() {
  const [isImagesUploadVisible, setIsImagesUploadVisible] = useState(false);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleClose = () => {
    setIsImagesUploadVisible(false);
  };

  const handleOpenImagesUpload = () => {
    setIsImagesUploadVisible(true);
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className="back-layer">
      <div className="footer">
        <div className="camera-icon-container">
          <FontAwesomeIcon
            icon={faCamera}
            size="lg"
            className="camera-icon"
            onClick={handleOpenImagesUpload}
          />
          <Modal
            show={isImagesUploadVisible}
            onClose={handleClose}
          >
            <UploadImages />
            {/* <UploadForm /> */}
          </Modal>
        </div>
      </div>
    </div>
  );
}