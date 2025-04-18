import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileImg from '../../assets/profile_img.png'
import dropdownIcon from '../../assets/caret_icon.svg'
import { logout, auth, db } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { query, getDocs, collection, where } from 'firebase/firestore'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef()
  const [username, setUsername] = useState("")
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path ? "nav-item active" : "nav-item";

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      } else {
        navRef.current.classList.remove('nav-dark')
      }
    })
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const q = query(collection(db, "user"), where("uid", "==", user.uid));
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
            setUsername(userData.name);
          }
        } catch (err) {
          console.error("Something went wrong...", err);
        }
      } else {
        setUsername("");
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="netflix logo" />
        <ul>
          <li className={isActive('/')}>
            <Link to="/">Home</Link>
          </li>
          <li className={isActive('/tvshows')}>
            <Link to="/tvshows">TV Shows</Link>
          </li>
          <li className={isActive('/movies')}>
            <Link to="/movies">Movies</Link>
          </li>
          <li className={isActive('/popular')}>
            <Link to="/popular">New & Popular</Link>
          </li>
          <li className={isActive('/mylist')}>
            <Link to="/mylist">My List</Link>
          </li>
          <li className={isActive('/languages')}>
            <Link to="/languages">Browse by Languages</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} className='icons' alt="search icon" />
        <p>{username ? username : "Loading..."}</p>
        <img src={bellIcon} className='icons' alt="bell icon" />
        <div className='navbar-profile'>
          <img src={profileImg} className='profile' alt="profile icon" />
          <img src={dropdownIcon} alt="dropdown icon" />
          <div className='dropdown'>
            <p onClick={() => logout()}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
