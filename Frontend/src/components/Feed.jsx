import { useEffect, useState } from "react";
import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import axios from 'axios';
import SideBar from "./SideBar";
import Videos from "./Videos";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  // const url =
  //   "https://youtube-v31.p.rapidapi.com/search?q=music&part=snippet%2Cid&regionCode=US&maxResults=50&order=date";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "3e4c56571amsh12fae578ae17934p15e3a6jsn615800c57cc7",
  //     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  //   },
  // };

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       // console.log(result.items);
  //       setVideos(result.items);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // const getData = async() =>{
  //   const res = await axios.get('http://localhost:5000/api/notes')
  //   setVideos(res.videos)
  // }

  // useEffect(() =>{
  //   // axios.get('http://localhost:5000/api/notes')
  //   // .then(videos => setVideos(videos.data))
  //   // .catch(err => console.log(err  )) 


  //   // const fetchdata = async () =>{
  //   //     const data = await axios.get('/api/notes');
  //   //     console.log(data);
  //   // };
  //   // fetchdata();
  //   getData();
  // },[])

  useEffect(() => {
    fetch('http://localhost:5000/api/notes')
    .then(data => data.json())
    .then(data =>{
      setVideos(data)
    } )
 
  }, [])
  

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          // borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
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
      <Box>
        <Videos videos={videos} />
      {/* <ul>
        {videos.map(video =>{
          return(
            <li>
              <h1>{video.snippet.title}</h1>
            </li>
          )
        })}
        </ul>   */}
      </Box>
    </Stack>
  );
};

export default Feed;
