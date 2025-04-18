import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TvShows from './pages/TvShows/TvShows'
import Movies from './pages/Movies/Movies'
import NewPopular from './pages/NewPopular/NewPopular'
import MyList from './pages/MyList/MyList'
import Browse from './pages/Browse/Browse'

function App() {

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async (user) => {
      if(user){
        console.log("Logged In");
        navigate("/")
      }else {
        console.log("Logged out");
        navigate("/login")
      }
    })
  },[])

  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/tvshows' element={ <TvShows/>}/>
       <Route path='/movies' element={ <Movies/>}/>
       <Route path='/popular' element={ <NewPopular/>}/>
       <Route path='/mylist' element={ <MyList/>}/>
       <Route path='/languages' element={ <Browse/>}/>
       <Route path='/login' element={ <Login/>}/>
       <Route path='/player/:id' element={ <Player/>}/>
      </Routes>
    </div>
  )
}

export default App