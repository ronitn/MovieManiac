import React from 'react'
import "./Navbar.css"
import Fire from "../../assets/fire.jpeg";
import Star from "../../assets/Star1.jpg";
import Party from "../../assets/party.jpg";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>MovieManiac</h1>
    <div className="navbar_links">
      
       <a href='#popular'>Popular {""} <img src={Fire} alt="fire emoji"
       className='navbar_emoji' /></a>
       <a href='#top_rated'>Top Rated {""} <img src={Star} alt="star emoji"
       className='navbar_emoji' /></a>
       <a href='#upcoming'>Upcoming {""} <img src={Party} alt="party emoji"
       className='navbar_emoji' /></a>
    </div>
    </nav>
  )
}

export default Navbar