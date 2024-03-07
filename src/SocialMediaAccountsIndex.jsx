import React, { useContext, useState, useRef } from 'react';
import { UserContext } from './UserContext';

export function SocialMediaAccountsIndex(props) {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  
  return (
    <div className='gap-5px column'>
      Social Media Accounts
      {props.socialMediaAccounts.map((socialMediaAccount) => (
        <div key={socialMediaAccount.id}>
          <p>{socialMediaAccount.account_handle}</p>
          <p>{socialMediaAccount.account_URL}</p>
        </div>
      ))}
      <img className='instagram-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" />
      <img className='facebook-icon' src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Facebook_icon.png" />
      <img className='x-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Twitter-new-logo.jpg/640px-Twitter-new-logo.jpg" />
      <img className='tiktok-icon' src="https://seeklogo.com/images/T/tiktok-share-icon-black-logo-29FFD062A0-seeklogo.com.png" />
    </div>
    
  )
}

export default SocialMediaAccountsIndex;