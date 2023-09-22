import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fifth, first, fourth, second, third } from '../utils/constants';
import {
  Drawer,
  IconButton,
  Chip
} from "@mui/material";
import Divider from '@mui/material/Divider';
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Slider = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <Drawer PaperProps={{ style: { width: '20%' } }} open={openDrawer} onClose={() => setOpenDrawer(false)} >
      <span display={"flex"} alignItems={'center'}>
      
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "red",
          fontSize: "25px",
          textDecorationLine: 'none'
        }}
      >
        <MenuIcon sx={{color : 'black', width : '25%'}}/> 
        <YouTubeIcon fontSize="Large" /> Youtube
      </Link>
      </span>
    
       
        <ul className="nav-menu-items">
        {first.map((category) => {
            return(
                <li className={category.cName}>
                    <Link to={category.path}>
                     {category.icon}
                     <span>
                        {category.name}
                     </span>
                     </Link>

                </li>
            )
        })}
        <Divider sx={{ bgcolor: "secondary.light" }} />
        {second.map((category) => {
            return(
                <li className={category.cName}>
                    <Link to={category.path}>
                     {category.icon}
                     <span>
                        {category.name}
                     </span>
                     </Link>

                </li>
            )
        })}
        
        <Divider sx={{ bgcolor: "secondary.light" }} />
        <p className="sidebar-third">Sign in to like videos, comment, and subscribe.
        <span >
          <Chip
        icon={<AccountCircleOutlinedIcon />}
        label="Sign in"
        variant="outlined"
        size="large"
      /></span>
      </p>
      <Divider sx={{ bgcolor: "secondary.light" }} />
      <h4>Explore</h4>
      {third.map((category) => {
            return(
                <li className={category.cName}>
                    <Link to={category.path}>
                     {category.icon}
                     <span>
                        {category.name}
                     </span>
                     </Link>

                </li>
            )
        })}
  <Divider sx={{ bgcolor: "secondary.light" }} />
  {fourth.map((category) => {
            return(
                <li className={category.cName}>
                    <Link to={category.path}>
                     {category.icon}
                     <span>
                        {category.name}
                     </span>
                     </Link>

                </li>
            )
        })}
  <Divider sx={{ bgcolor: "secondary.light" }} />
  {fifth.map((category) => {
            return(
                <li className={category.cName}>
                    <Link to={category.path}>
                     {category.icon}
                     <span>
                        {category.name}
                     </span>
                     </Link>

                </li>
            )
        })}
  <Divider sx={{ bgcolor: "secondary.light" }} />

    </ul>
      </Drawer>

      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ marginLeft: "auto", color: "black"  }}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default Slider;
