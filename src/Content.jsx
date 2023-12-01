import { UploadImages } from "./UploadImages"

import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

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
import { UsersNew } from "./create/UsersNew";

import { ReviewersIndex } from "./index/ReviewersIndex";
import { ReviewersNew } from "./reviews/ReviewersNew";

import { Signup } from "./Signup";
import { AdminLogin } from "./AdminLogin";

import { About } from "./About";
import { Contact } from "./Contact";

import { Modal } from "./Modal";

import { AvatarUpload } from "./AvatarUpload"

export function Content() {
  const { currentUser } = useContext(UserContext);
  const [adminComments, setAdminComments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [serviceOfferings, setServiceOfferings] = useState([]);
  const [users, setUsers] = useState([]);
  const [reviewers, setReviewers] = useState([]);
  const [isGalleryViewVisible, setIsGalleryViewVisible] = useState([false]);
  const [isPhotosShowVisible, setIsPhotosShowVisible] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState({});
  
  const handleShowPhoto = (photo) => {
    console.log("handleShowPhoto", photo);
    setIsPhotosShowVisible(true);
    setCurrentPhoto(photo);
  };

  const handleGalleryView = (photo) => {
    console.log("handle gallery view", photo);
    setIsGalleryViewVisible(true);
    setCurrentPhoto(photo);
  };

  const handleUpdatePhoto = (id, params, successCallback) => {
    console.log("handleUpdatePhoto", params);
    axios.patch(`http://localhost:3000/photos/${id}.json`, params).then((response) => {
      setPhotos(
        photos.map((photo) => {
          if (photo.id === response.data.id) {
            return response.data;
          } else {
            return photo;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyPhoto = (photo) => {
    console.log("handleDestroyPhoto", photo);
    axios.delete(`http://localhost:3000/photos/${photo.id}.json`).then((response) => {
      setPhotos(photos.filter((p) => p.id !== photo.id));
      handleClose();
      window.location.reload();
    });
  };
    
  const handleClose = () => {
    console.log("handleClose");
    setIsPhotosShowVisible(false);
  };

  const handleIndexReviewers = () => {
    axios.get("http://localhost:3000/reviewers.json").then((response) => {
      setReviewers(response.data);
    });
  };  

  const handleCreateReviewer = (params, successCallback) => {
    // console.log("handleCreateServiceOffering", params);
    axios.post("http://localhost:3000/reviewers.json", params).then((response) => {
      setServiceOfferings([...serviceOfferings, response.data]);
      successCallback();
      // window.location.reload();
    });
  };

  const handleIndexUsers = () => {
    // console.log("handleIndexUsers");
    axios.get("http://localhost:3000/users.json").then((response) => {
      // console.log(response.data);
      setUsers(response.data);
    });
  };

  const handleCreateUser = (params, successCallback) => {
    // console.log("handleCreateUser", params);
    axios.post("http://localhost:3000/users.json", params).then((response) => {
      setUsers([...users, response.data]);
      successCallback();
      // window.location.reload()
    });
  };

  const handleIndexServiceOfferings = () => {
      axios.get("http://localhost:3000/service_offerings.json").then((response) => {
        setServiceOfferings(response.data);
      });
    };


  // const handleCreateServiceOffering = (params, successCallback) => {
  //   // console.log("handleCreateServiceOffering", params);
  //   axios.post("http://localhost:3000/service_offerings.json", params).then((response) => {
  //     setServiceOfferings([...serviceOfferings, response.data]);
  //     successCallback();
  //     // window.location.reload()
  //   });
  // };

  const handleIndexReviews = () => {
    axios.get("http://localhost:3000/reviews.json").then((response) => {
      setReviews(response.data);
    });
  };

  const handleCreateReview = (params, successCallback) => {
    // console.log("handleCreateReview", params);
    axios.post("http://localhost:3000/reviews.json", params).then((response) => {
      setReviews([...reviews, response.data]);
      successCallback();
      // window.location.reload();
    });
  };

  const handleIndexPhotos = () => {
    // console.log("handleIndexPhotos");
    axios.get("http://localhost:3000/photos.json").then((response) => {
      // console.log(response.data);
      setPhotos(response.data);
    });
  };

  // const handleCreatePhoto = (params, successCallback) => {
  //   // console.log("handleCreatePhoto", params);
  //   axios.post("http://localhost:3000/photos.json", params).then((response) => {
  //     setPhotos([...photos, response.data]);
  //     successCallback();
  //     // window.location.reload();
  //   });
  // };

  const handleIndexAdminComments = () => {
    axios.get("http://localhost:3000/admin_comments.json").then((response) => {
      setAdminComments(response.data);
    });
  };

  const handleCreateAdminComment = (params, successCallback) => {
    // console.log("handleCreateAdminComment", params);
    axios.post("http://localhost:3000/admin_comments.json", params).then((response) => {
      setAdminComments([...adminComments, response.data]);
      successCallback();
      // window.location.reload()
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
    if (photos.length > 0) {
      setCurrentPhoto(photos[0]);
    }
  }, [photos]);
  
  
  
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/about" element={<About />} />
  
        <Route
          path="/PridefulPack"
          element={
            <>
            <div className="container">
             <h1>T&S Prideful Pack</h1>
              To do: make component for landing. Include main image randomize photos index map?... background, logo, randomize a few reviews, if clicking on any reviews, direct to reviews route. Take snippet from bio with "read more" that directs to the full bio on the about page
          </div>
          </> 
          }
        />
  
        <Route
          path="/reviews"
          element={
            <>
            {/* To do: oAuth, refactor ReviewsNew component for an oAuth login or guest login, create login components, add buttons to index to "leave a review" */}
              <ReviewsIndex 
                reviews={reviews}/>
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
            <GalleryView
              photo={currentPhoto} />
            <PhotosIndex
              photos={photos}
              onShowPhoto={handleGalleryView}
             />   
            </>
          }
        />

        <Route
          path="/admin_dashboard"
          element={currentUser ? (
            <div>
                More planning needed...
            </div>
          ) : (
            <AdminLogin />
          )}
        />
        <Route
            path="/user_settings"
            element={currentUser ? (
              <div>
                <div>
                  <UsersIndex users={users} />
                  <UsersNew 
                    onCreateUser={handleCreateUser} />    
                </div>
                <div>
                  <AvatarUpload />
                </div>
              </div>
            ) : (
              <AdminLogin />
            )}
          />
        <Route
          path="/avatar_upload"
          element={
            <AvatarUpload />
          }
        />

        <Route
          path="/admin_gallery"
          element={currentUser ? (
            <>
           <PhotosIndexAdmin 
              photos={photos} 
              onShowPhoto={handleShowPhoto} 
              onDestroyPhoto={handleDestroyPhoto}/>
            </>
          ) : (
            <AdminLogin />
          )}
        />

        <Route 
          path="/contact"
          element={
            <Contact />
          } />

      
        <Route
          path="/services"
          element={
            <>
              <ServiceOfferingsIndex 
                serviceOfferings={serviceOfferings} />
            </>
          }
        />
      </Routes>


      <Modal 
        show={isPhotosShowVisible} 
        onClose={handleClose}>
         <PhotosShow photo={currentPhoto} 
         onUpdatePhoto={handleUpdatePhoto} 
         onDestroyPhoto={handleDestroyPhoto}/>
      </Modal>

  </div>
  );
}