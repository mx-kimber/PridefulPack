import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

import { Modal } from "./Modal";

import { Signup } from "./Signup";
import { AdminLogin } from "./AdminLogin";
import { About } from "./About";
import { Contact } from "./Contact";

import { AdminDashboard } from "./admin_dashboard/AdminDashboard"
import { AdminCommentsIndex } from "./index/AdminCommentsIndex";
import { AdminCommentsNew } from "./create/AdminCommentsNew";
import "./admin_dashboard/AdminDashboard.css"

import { PhotosIndexAdmin } from "./admin_dashboard/PhotosIndexAdmin";
import { PhotosShow } from "./admin_dashboard/PhotosShow";

import { GalleryView } from "./gallery/GalleryView";
import { PhotosIndex } from "./gallery/PhotosIndex"

import { ReviewsIndex } from "./reviews/ReviewsIndex"
import { ReviewsNew } from "./reviews/ReviewsNew";

import { ServiceOfferingsIndex } from "./index/ServiceOfferingsIndex";
import { ServiceOfferingsNew } from "./create/ServiceOfferingsNew";

import { UsersIndex } from "./index/UsersIndex";
import { UsersNew } from "./UsersNew";

import { ReviewersIndex } from "./index/ReviewersIndex";
import { ReviewersNew } from "./reviews/ReviewersNew";

import { UploadImages } from "./UploadImages"
import { AvatarUpload } from "./AvatarUpload"
import { UserSettings } from "./UserSettings"

export function Content() {
  const { currentUser } = useContext(UserContext);
  const [adminComments, setAdminComments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [serviceOfferings, setServiceOfferings] = useState([]);
  const [users, setUsers] = useState([]);
  const [reviewers, setReviewers] = useState([]);
  const [isGalleryViewVisible, setIsGalleryViewVisible] = useState(false);
  const [isPhotosShowVisible, setIsPhotosShowVisible] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState({});
  const [isLoginViewVisible, setIsLoginViewVisible] = useState(false);
  const [isLoginFromSettingsViewVisible, setIsLoginFromSettingsViewVisible] = useState(false);

  const handleShowPhoto = (photo) => {
    setIsPhotosShowVisible(true);
    setCurrentPhoto(photo);
  };

  const handleGalleryView = (photo) => {
    setIsGalleryViewVisible(true);
    setCurrentPhoto(photo);
  };

  const handleUpdatePhoto = (id, params, successCallback) => {
    axios.patch(`http://localhost:3000/photos/${id}.json`, params).then((response) => {
      setPhotos(
        photos.map((photo) => (photo.id === response.data.id ? response.data : photo))
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyPhoto = (photo) => {
    axios.delete(`http://localhost:3000/photos/${photo.id}.json`).then((response) => {
      setPhotos(photos.filter((p) => p.id !== photo.id));
      handleClose();
      window.location.reload();
    });
  };

  const openLoginModal = () => {
    setIsLoginFromSettingsViewVisible(true);
  };

  const handleClose = () => {
    setIsPhotosShowVisible(false);
    setIsLoginViewVisible(false);
    setIsLoginFromSettingsViewVisible(false);
    window.location.href = "/PridefulPack";
  };

  const handleCloseInSettings = () => {
    setIsLoginFromSettingsViewVisible(false);
  };

  const handleIndexReviewers = () => {
    axios.get("http://localhost:3000/reviewers.json").then((response) => {
      setReviewers(response.data);
    });
  };

  const handleCreateReviewer = (params, successCallback) => {
    axios.post("http://localhost:3000/reviewers.json", params).then((response) => {
      setServiceOfferings([...serviceOfferings, response.data]);
      successCallback();
    });
  };

  const handleIndexUsers = () => {
    axios.get("http://localhost:3000/users.json").then((response) => {
      setUsers(response.data);
    });
  };

  const handleCreateUser = (params, successCallback) => {
    axios.post("http://localhost:3000/users.json", params).then((response) => {
      setUsers([...users, response.data]);
      successCallback();
    });
  };

  const handleIndexServiceOfferings = () => {
    axios.get("http://localhost:3000/service_offerings.json").then((response) => {
      setServiceOfferings(response.data);
    });
  };

  const handleIndexReviews = () => {
    axios.get("http://localhost:3000/reviews.json").then((response) => {
      setReviews(response.data);
    });
  };

  const handleCreateReview = (params, successCallback) => {
    axios.post("http://localhost:3000/reviews.json", params).then((response) => {
      setReviews([...reviews, response.data]);
      successCallback();
    });
  };

  const handleIndexPhotos = () => {
    axios.get("http://localhost:3000/photos.json").then((response) => {
      setPhotos(response.data);
    });
  };

  const handleIndexAdminComments = () => {
    axios.get("http://localhost:3000/admin_comments.json").then((response) => {
      setAdminComments(response.data);
    });
  };

  const handleCreateAdminComment = (params, successCallback) => {
    axios.post("http://localhost:3000/admin_comments.json", params).then((response) => {
      setAdminComments([...adminComments, response.data]);
      successCallback();
    });
  };

  useEffect(() => {
    handleIndexAdminComments();
    handleIndexPhotos();
    handleIndexReviews();
    handleIndexServiceOfferings();
    handleIndexUsers();
    handleIndexReviewers();
  }, []);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsLoginViewVisible(currentPath === "/admin_login");

    if (photos.length > 0) {
      setCurrentPhoto(photos[0]);
    }
  }, [photos]);

  
  
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/admin_login"
          element={
            <Modal show={isLoginViewVisible} onClose={handleClose}>
              <AdminLogin />
            </Modal>
          }
        />
        <Route path="/about" 
          element={
            <h1>About</h1>
          } 
        />

        <Route
          path="/PridefulPack"
          element={
            <>
              <div>
                <h1>T&S Prideful Pack</h1>
                {/* To do: make component for landing. Include main image randomize photos index map?... background, logo, randomize a few reviews, if clicking on any reviews, direct to reviews route. Take snippet from bio with "read more" that directs to the full bio on the about page */}
              </div>
            </>
          }
        />
        <Route
          path="/reviews"
          element={ 
            <h1>Reviews</h1>
            //  To do: oAuth, refactor ReviewsNew component for an oAuth login or guest login, create login components, add buttons to index to "leave a review" 

              // <ReviewsIndex 
              //   reviews={reviews} /> 
          }
        />
        <Route
          path="/gallery"
          element={
            <h1>Gallery</h1>
            
              // <GalleryView
              //   photo={currentPhoto} />
              // <PhotosIndex
              //   photos={photos}
              //   onShowPhoto={handleGalleryView}
              //  />   
           
          }
        />
        <Route
          path="/admin_dashboard"
          element={
            currentUser ? (
              <>
                <AdminDashboard />
              </>
            ) : (
              <AdminLogin />
            )
          }
        />
        <Route
          path="/user_settings"
          element={
            currentUser ? (
              <div>
                {/* <div>
                  <UsersIndex
                    users={users}
                    openLoginModal={openLoginModal}
                    onClose={handleCloseInSettings}
                  />
                </div> */}
                <div>
                  <UserSettings user={currentUser} 
                    users={users}
                    openLoginModal={openLoginModal}
                    onClose={handleCloseInSettings} />
                </div>
                  {/* <UsersNew 
                    onCreateUser={handleCreateUser}/> */}
              </div>
              
            ) : (
              <AdminLogin />
            )
          }
        />
        <Route
          path="/admin_gallery"
          element={
            currentUser ? (
              <>
                <PhotosIndexAdmin
                  photos={photos}
                  onShowPhoto={handleShowPhoto}
                  onDestroyPhoto={handleDestroyPhoto}
                />
              </>
            ) : (
              
              <AdminLogin />
              
            )
          }
        />
        <Route path="/contact" 
          element= {
            <h1>Contact</h1>
          } />
        
        <Route
          path="/services"
          element={
            <>
              <ServiceOfferingsIndex serviceOfferings={serviceOfferings} />
            </>
          }
        /> <Route
          path="/admin_services"
          element={
            <>
              <ServiceOfferingsIndex serviceOfferings={serviceOfferings} />
              <ServiceOfferingsNew />
            
            </>
          }
        />
      </Routes>
  
     
     

  {/* MODALS */}

      <Modal show={isPhotosShowVisible} onClose={handleClose}>
        <PhotosShow
          photo={currentPhoto}
          onUpdatePhoto={handleUpdatePhoto}
          onDestroyPhoto={handleDestroyPhoto}
        />
      </Modal>
  
      <Modal show={isLoginViewVisible} onClose={handleClose}>
        <AdminLogin />
      </Modal>
  
      <Modal show={isLoginFromSettingsViewVisible} onClose={handleCloseInSettings}>
        <AdminLogin />
      </Modal>
    </div>
  );
}