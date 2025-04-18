import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileImg from '../../assets/profile_img.png'
import dropdownIcon from '../../assets/caret_icon.svg'
import { logout, auth, db } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'

const Navbar = () => {
  const navRef = useRef()
  const [username, setUsername] = useState("")

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
          console.error("Kullanıcı adı alınırken hata oluştu:", err);
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
