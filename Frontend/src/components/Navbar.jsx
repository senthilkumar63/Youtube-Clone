import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import { Stack, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
// import MenuIcon from "@mui/icons-material/Menu";

import { first } from "../utils/constants";
import { useState } from "react";
import { Slider } from ".";

const Navbar = () => {
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
      <KeyboardVoiceIcon />
      <MoreVertOutlinedIcon />
      <Chip 
        icon={<AccountCircleOutlinedIcon />}
        label="Sign in"
        variant="outlined"
        size="large"
      />
    </Stack>
  );
};

export default Navbar;
