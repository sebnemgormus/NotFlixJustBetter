import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileImg from '../../assets/profile_img.png'
import dropdownIcon from '../../assets/caret_icon.svg'


function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="netflix logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} className='icons' alt="search icon" />
        <p>Children</p>
        <img src={bellIcon} className='icons' alt="search icon" />
        <div className='navbar-profile'>
          <img src={profileImg} className='profile' alt="profile icon" />
          <img src={dropdownIcon} alt="search icon" />
          <div className='dropdown'>
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar