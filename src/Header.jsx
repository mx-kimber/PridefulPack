import { LogoutLink } from "./LogoutLink";

export function Header() {

  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = <>
    <div>
      <a href="/admin_login">Login</a>
      <a href="/signup">Signup</a>
    </div>
    </>
  } else {
    authenticationLinks = <LogoutLink />
  }
  
  return (
    <header>
      <nav>
        <a href="PridefulPack">Home</a> | 
        <a href="gallery">Gallery</a> | 
        <a href="services">Services</a> | 
        <a href="reviews">Reviews</a> | 
        <a href="about">About</a> | 
        <a href="signup">Signup</a> | 
        <a href="admin_login">Admin Login</a> | 
        <a href="admin">Admin Dashboard</a> | 
        {authenticationLinks}
      </nav>
    </header>
  )
}