import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import useLocalStorage from '../Hooks/useLocalStorage';

export default function Darkmode() {
  const [darkmode, setDarkmode] = useLocalStorage('darkmode', false);
  return (
    <Button variant="contained" >{darkmode ? <DarkModeIcon/> : <LightModeIcon/> }</Button>
    // onClick={setDarkmode(!darkmode)}>
  )
}
