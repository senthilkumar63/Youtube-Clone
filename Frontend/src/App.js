import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {Navbar , SearchFeed, ChannelDetail, VideoDetail, Feed, Chips} from './components';
import Login from './Pages/Login';
import Register from './Pages/Register';
import axios from 'axios'
import {Toaster} from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true
const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{}}>
        <Navbar/>
        <Toaster position='top-center' toastOptions={{duration :2000}}/>
        <Chips/>
        <br/>
        <Routes>
            <Route path='/' exact element={<Feed />}/>
            <Route path='/video/:id' element={<VideoDetail />}/>
            <Route path='/channel/:id' element={<ChannelDetail />}/>
            <Route path='/search/:searchTerm' element={<SearchFeed />}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
