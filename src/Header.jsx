import { LogoutLink } from "./LogoutLink";
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export function Header() {
  const { currentUser } = useContext(UserContext);

  let authenticationLinks;

  if (currentUser) {
    authenticationLinks = (
      <>
        <div>
          <a href="admin_dashboard">Admin Dashboard</a>
        </div>
        <LogoutLink />
      </>
    );
  // } else {
  //   authenticationLinks = (
  //     <>
  //       <div>
  //         <a href="/admin_login">Login</a>
  //       </div>
  //     </>
  //   );
  }

  return (
    <header>
      <div>
        {currentUser ? `Welcome, ${currentUser.first_name}!` : null}
      </div>
      <nav>
        <a href="PridefulPack">Home</a> |
        <a href="gallery">Gallery</a> |
        <a href="services">Services</a> |
        <a href="reviews">Reviews</a> |
        <a href="about">About</a> |

        {authenticationLinks}
      </nav>
    </header>
  )
}