import React, { useEffect } from 'react'
import {Button} from '@mui/material';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { grabLocalStorage } from '../Hooks/useLocalStorage';
import LightMode from '@mui/icons-material/LightMode';

export default function Darkmode(props) {
  let darkmode = grabLocalStorage('darkmode');
  return (
    <Button
      variant="contained"
      sx={{
          position: "absolute",
          right: "5px",
          top: "5px",
        }}
        {...props} 
        color="opposite"
    >{
      darkmode ? 
    <LightModeIcon sx={{color:"white"}}/>
     : <DarkModeIcon sx={{color:"black"}} />
     }
     </Button>
  )
}
