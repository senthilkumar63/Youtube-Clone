import React, {useState,useEffect}from 'react'
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import {CSSTransition} from 'react-transition-group'
import Avatar from '@mui/material/Avatar';

const Dropdown2= ({user}) => {
    // const [activeMenu, setActiveMenu] = useState("main")
//     const [user, setUser] = useState(null)
//  useEffect(() => {
//   const getUser = () => {
//     fetch("http://localhost:5000/auth/login/success",{
//       method:'GET',
//       credentials:'include',
//       headers:{
//         Accept: 'application/json',
//         'Content-type': 'application/json',
//         'Access-Control-Allow-Credentials': true,
//       }
//     }).then(response =>{
//       if(response.status ===200) return response.json()
//       throw new Error ('Authentication has been failed')
//     }).then(resObject=>{
//       setUser(resObject.user)
//     }).catch((err)=>{
//       console.log(err)
//     })
//   } 
//   getUser()
//    }
   
//  ,[])
//  console.log(user)
  return (
    <div className='dropdownprofile'>
        
    </div>
  )
}

export default Dropdown2
