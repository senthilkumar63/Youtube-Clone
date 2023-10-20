import React from 'react'
import { useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import {Navbar , SearchFeed, ChannelDetail, VideoDetail, Feed, Chips} from './components';
import Login from './Pages/Login';
import Register from './Pages/Register';
import axios from 'axios'
import {Toaster} from 'react-hot-toast'

// axios.defaults.baseURL = 'http://localhost:5000'
// axios.defaults.withCredentials = true
const App = () => {
  const [user, setUser] = useState(null)
 useEffect(() => {
  const getUser = () => {
    fetch("http://localhost:5000/auth/login/success",{
      method:'GET',
      credentials:'include',
      headers:{
        Accept: 'application/json',
        'Content-type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      }
    }).then(response =>{
      if(response.status ===200) return response.json()
      throw new Error ('Authentication has been failed')
    }).then(resObject=>{
      setUser(resObject.user)
    }).catch((err)=>{
      console.log(err)
    })
  } 
  getUser()
   }
   
 ,[])
 console.log(user)
 
  // const user = false
  return (
    <BrowserRouter>
      <Box sx={{}}>
        <Navbar user={user}/>
        {/* <Toaster position='top-center' toastOptions={{duration :2000}}/> */}
        <Chips/>
        <br/>
        <Routes>
            <Route path='/' exact element={ <Feed />}/>
            <Route path='/video/:id' element={<VideoDetail />}/>
            <Route path='/channel/:id' element={<ChannelDetail />}/>
            <Route path='/search/:searchTerm' element={<SearchFeed />}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={user ? <Navigate to='/'/>:<Login/>}/>
        </Routes>
        
      </Box>
    </BrowserRouter>
  )
}

export default App
