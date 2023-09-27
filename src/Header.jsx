import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="PridefulPack">Home</a> | 
        <a href="gallery">Gallery</a> | 
        <a href="services">Services</a> | 
        <a href="reviews">Reviews</a> | 
        <a href="about">About</a> | 
        <a href="signup">Signup</a> | 
        <a href="login">Login</a> | 
        <a href="admin">Admin Dashboard</a> | 
        <LogoutLink />
      </nav>
    </header>
  )
}