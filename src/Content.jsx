import { UploadImages } from "./UploadImages"

import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

import { AdminCommentsIndex } from "./index/AdminCommentsIndex";
import { AdminCommentsNew } from "./create/AdminCommentsNew";
import "./AdminDashboard.css"

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
  
  //  const handleImagesUpload = (params) => {
  //   axios.post("http://localhost:3000/photos.json" ,params).then((response) => {
  //     setPhotos([...photos, response.data]);
  //    window.location.reload();
  //   });}

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
    
  const handleClose = () => {
    console.log("handleClose");
    setIsPhotosShowVisible(false);
    };

  const handleIndexReviewers = () => {
    // console.log("handleIndexReviewers");
    axios.get("http://localhost:3000/reviewers.json").then((response) => {
      // console.log(response.data);
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
      // console.log("handleIndexServices");
      axios.get("http://localhost:3000/service_offerings.json").then((response) => {
        // console.log(response.data);
        setServiceOfferings(response.data);
      });
    };


  const handleCreateServiceOffering = (params, successCallback) => {
    // console.log("handleCreateServiceOffering", params);
    axios.post("http://localhost:3000/service_offerings.json", params).then((response) => {
      setServiceOfferings([...serviceOfferings, response.data]);
      successCallback();
      // window.location.reload()
    });
  };

  const handleIndexReviews = () => {
    // console.log("handleIndexReviews");
    axios.get("http://localhost:3000/reviews.json").then((response) => {
      // console.log(response.data);
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
    // console.log("handleIndexAdminComments");
    axios.get("http://localhost:3000/admin_comments.json").then((response) => {
      // console.log(response.data);
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
              {/* <About />
              <ServiceOfferingsIndex serviceOfferings={serviceOfferings} />
              <PhotosIndex photos={photos} />
              <ReviewsIndex reviews={reviews} /> */}
            </>
          }
        />
  
        <Route
          path="/reviews"
          element={
            <>
              <ReviewsIndex reviews={reviews} />
              <ReviewsNew onCreateReview={handleCreateReview} />
              <ReviewersNew onCreateReviewer={handleCreateReviewer} />
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
            <div className="container-wrapper">
              <div className="container">
                <UsersIndex users={users} />
                <UsersNew 
                  onCreateUser={handleCreateUser} />
                  {/* onEditUser= */}
                  {/* onDestroyUser= */}
              </div>
              <div className="container">
                <ReviewsIndex reviews={reviews} />
                <AdminCommentsNew onCreateAdminComment={handleCreateAdminComment} />
              </div>
            </div>
          ) : (
            <AdminLogin />
          )}
        />



        <Route
          path="/admin_gallery"
          element={currentUser ? (
            <>
           <PhotosIndexAdmin photos={photos} onShowPhoto={handleShowPhoto} />
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
              <ServiceOfferingsIndex serviceOfferings={serviceOfferings} />
            </>
          }
        />
      </Routes>


      <Modal 
        show={isPhotosShowVisible} 
        onClose={handleClose}>
         <PhotosShow photo={currentPhoto} />
      </Modal>

  </div>
  );
}