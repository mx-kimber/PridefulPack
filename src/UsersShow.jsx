import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faUserXmark, faKey, faCircleXmark,faUserPen, faUserTie } from '@fortawesome/free-solid-svg-icons';
import './UsersShow.css';
import './icons.css';
import './index/UsersIndex.css'

export function UsersShow(props) {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="gap">
      {currentUser && (
        <div>
          <div>
            
      
  
                <div className="container-1">
              
                  {currentUser.profile_photo && (
                    <div className="profile-photo-wrap">
                    <img
                      src={`https://res.cloudinary.com/pawparazzi-media/image/upload/${currentUser.profile_photo}`}
                      alt="Profile"
                      className="show-photo"
                    /></div>
                  )}<div className="user-settings-header">
                </div>
                {/* <div className="show-user-name">
               {currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : null}
              </div> */}
              </div>
            </div>
          
        </div>
      )}
      
      <div className="user-information">
        <div className="col-1">
          <div className="info-cards-wrap">
            <div className="card-header-wrap">
              <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
              Contact Information
            </div>
            <div className="card-content-wrap">
              <div className="name-wrap">
                Name: {currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : null}
              </div>
              <div className="email-wrap">Email: {currentUser ? currentUser.email : null}</div>
              <div className="phone-wrap">Phone Number: {currentUser ? currentUser.phone_number : null}</div>
              <div className="address-wrap">
                Street: {currentUser ? currentUser.street_address : null}<br />
                Unit: {currentUser ? currentUser.address_details : null}<br />
                City: {currentUser ? currentUser.city : null}<br />
                State: {currentUser ? currentUser.state : null}<br />
                Zip Code: {currentUser ? currentUser.zip_code : null}
              </div>
            </div>
          </div>
         
          <div className="info-cards-wrap">
            <div className="card-header-wrap">
              <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
              Bio
            </div>
            <div className="card-content-wrap">
              {currentUser ? currentUser.bio : null}
            </div>
          </div>
        </div>
        

        <div className="col-2">
          <div className="grid-2-cols">
            <div className="info-cards-wrap">
              {/* <div className="card-header-wrap">
                <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
              </div> */}
              <div className="card-content-center">
                <FontAwesomeIcon icon={faKey} className='icon' />
              </div>
            </div>
            <div className="info-cards-wrap">
                {/* <div className="card-header-wrap">
                <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
              </div> */}
           <div className="card-content-center">
              <FontAwesomeIcon icon={faUserTie} className='icon' />
           </div>
              
            </div>
          </div>
          <div className="info-cards-wrap">
            <div className="card-header-wrap">
              <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
              Social Media
            </div>
            <div className='card-content-wrap'>
              Instagram: {currentUser ? currentUser.instagram : null}<br />
              Facebook: {currentUser ? currentUser.facebook : null}<br />
              Note: add into user table in rails
            </div>
          </div>

          <div className="grid-2-cols">
            <div className="info-cards-wrap">
              <div className="card-header-wrap">{/* <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" /> */}
              </div>
              <div className='card-content-center'>
              {/* <FontAwesomeIcon icon={faUserTie}className="icon" />  */}
            </div>
            </div>
            
            <div className="info-cards-wrap">
            {/* <div className="card-header-wrap">
              <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
            </div> */}
              <div className="card-content-center">
                <FontAwesomeIcon icon={faUserXmark} className='icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersShow;
