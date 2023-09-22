import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import {Videos, ChannelCard, SideBar} from './';

const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])
  // const url =
  // 'https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UCBVjMGOIkavEAhyqpxJ73Dw';
  // const url_1 = 'https://youtube-v31.p.rapidapi.com/search?q=music&part=snippet%2Cid&regionCode=US&maxResults=50&order=date';
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "c86c9d973emshbf3e99a548827ddp1b1107jsn96b3d3bb5e2b",
  //     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  //   },
  // };

  // console.log(channelDetail);

  // useEffect(() => {
  //   async function fetchChannelData() {
  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       // console.log(result.items);
  //       setChannelDetail(result?.items[0]);
  //     }
  //     catch (error) {
  //       console.error(error);
  //     }
      
  //   }
  //   async function fetchVideoData() {
  //     try {
  //       const response = await fetch(url_1, options);
  //       const result = await response.json();
  //       // console.log(result.items);
  //       setVideos(result?.items);
  //     }
  //     catch (error) {
  //       console.error(error);
  //     }
      
  //   }
  //   fetchChannelData();
  //   fetchVideoData();
  // }, [id]);
  
  return (
    <>

    <Stack sx={{ flexDirection: { sx: "column", md: "row",mt:'0px' }}}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          // borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },display: 'inline'
        }}
      >
        <SideBar />

        <Typography
          className="copyright"
          varient="body2"
          display="flex"
          sx={{ mt: 10, flexDirection: "column", justifyContent: "center" }}
        >
          
        </Typography>
        
        
      </Box>
      <Box minHeight='95vh' sx={{direction:'row', flexWrap :'wrap' ,justifyContent:'start'}}>
      
      <div style={{
        backgroundImage: 'linear-gradient(to right, #E040FB, #00BCD4)',
        zIndex: 10, height: '250px', position: 'relative', display: 'block', marginLeft:'80px'
      }} />
    
  </Box>
    </Stack>

    
    </>
  )
}

export default ChannelDetail