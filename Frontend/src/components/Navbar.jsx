import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import { Stack, Chip, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import Avatar from '@mui/material/Avatar';
// import MenuIcon from "@mui/icons-material/Menu";

import { first } from "../utils/constants";
import { useState } from "react";
import { Slider } from ".";
import Logout from "../Pages/Logout";
import Dropdown1 from "./Dropdown1";
import Dropdown2 from "./Dropdown2";


const Navbar = ({user}) => {
  const logout = () =>{
    window.open('http://localhost:5000/auth/logout', '_self')
  }
  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }
  
  const [open, setOpen] = useState(false)
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        // background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Slider />

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onclick={showSidebar}>
          {first.map((category) => {
            return (
              <li className={category.cName}>
                <Link to={category.path}>
                  {category.icon}
                  <span>{category.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "red",
          fontSize: "25px",
          textDecorationLine: "none",
        }}
      >
        <YouTubeIcon fontSize="Large" /> Youtube
      </Link>
      <SearchBar />
      <IconButton><KeyboardVoiceIcon /></IconButton>
      
      
      {user? (
        <>
       
          <IconButton onClick={()=>{setOpen(!open)}}> 
          <VideoCallOutlinedIcon />
          </IconButton>
          <IconButton onClick={()=>{setOpen(!open)}}> 
          <NotificationsNoneIcon />
          </IconButton>
          <IconButton onClick={()=>{setOpen(!open)}}> 
          {
          open && <Dropdown2 user={user}/>
        }
        <Avatar
            alt=''
            // src={user._json.picture}
            src={user.photos[0].value}
            referrerpolicy="no-referrer"
            sx={{ width: 35, height: 35 }} />
       
       </IconButton>
       
            <Logout/>
            </>

      ) : (
        <>
        {
          open && <Dropdown1/>
        }
        <IconButton onClick={()=>{setOpen(!open)}}>
          <MoreVertOutlinedIcon/>
        </IconButton>
        
        <Chip
              icon={<AccountCircleOutlinedIcon />}
              label="Sign in"
              variant="outlined"
              size="large"
              onClick={google} />
          </>
     
      )}

      
      
     
     
    </Stack>
  );
};

export default Navbar;
