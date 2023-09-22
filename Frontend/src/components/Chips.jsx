import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function ClickableLinkChips() {
  return (
  
         <Stack direction="row" spacing={1}  >
      <Chip label="All" component="a" href="" clickable  />
      <Chip label="React Router" component="a" href="" clickable />
      <Chip label="Software Engineering" component="a" href="" clickable />
      <Chip label="C++" component="a" href="" clickable />
      <Chip label="Music" component="a" href="" clickable />
      <Chip label="Gaming" component="a" href="" clickable />
      <Chip label="Editing" component="a" href="" clickable />
      <Chip label="Computer" component="a" href="" clickable />
      <Chip label="Tamil Cinema" component="a" href="" clickable />
      <Chip label="Game Show" component="a" href="" clickable />
      <Chip label="Recently Upload" component="a" href="" clickable />
      <Chip label="Watched" component="a" href="" clickable />
    </Stack>
 
   
  );
}
