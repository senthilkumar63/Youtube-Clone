import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import { useState } from "react";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos &&
        videos.map((item, idx) => (
          <Box key={idx}>
            {item.videoId && <VideoCard video={item} />}
            {/* {item.id.channelId && <ChannelCard channelDetail={item}/>} */}
          </Box>
        ))}
    </Stack>
  );
};

export default Videos;
