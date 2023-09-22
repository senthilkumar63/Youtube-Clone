import React from "react";
import { Stack } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryIcon from "@mui/icons-material/History";


const SideBar = (selectedCategory, setSelectedCategory) => {
  return (
    <Stack
      className=""
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      <button className="category-btn" onClick={()=>setSelectedCategory}>
        <HomeIcon />Home
      </button>
      <button className="category-btn">
        <FavoriteBorderOutlinedIcon />Shorts
      </button>
      <button className="category-btn">
        <SubscriptionsOutlinedIcon />Subscription
      </button>
      <button className="category-btn">
        <VideoLibraryOutlinedIcon />Library
      </button>
      <button className="category-btn">
        <HistoryIcon />History
      </button>
    </Stack>
  );
};

export default SideBar;
