import React, { useEffect } from 'react'
import {Button} from '@mui/material';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useLocalStorage } from '../Hooks/useLocalStorage';
import LightMode from '@mui/icons-material/LightMode';

export default function Darkmode(props) {
  const {darkmode} = props;
  return (
    <Button
      variant="contained"
      sx={{
          position: "absolute",
          right: "5px",
          top: "5px",
          zIndex: '2'
        }}
        {...props} 
        color="opposite"
    >{darkmode &&
      darkmode ? 
      <LightModeIcon sx={{color:"black"}}/>
     : <DarkModeIcon sx={{color:"white"}} />
     }
     </Button>
  )
}
