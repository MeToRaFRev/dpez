import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {grabLocalStorage, useLocalStorage } from "../Hooks/useLocalStorage.js";
import axios from 'axios';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Datapower Easy Tool
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const handleLogin = (preferences,setAuth) => {
  if(preferences.save === true){
    localStorage.setItem('preferences',JSON.stringify(preferences));
  }
  const token = btoa(preferences.username+":"+preferences.password)
  axios.get('http://'+preferences.datapower+'/Tools/rest-cors/mgmt/actionqueue/default',
  {headers: {
    'Authorization': `Basic ${token}`}
  }
  ).then(() => 
    {
      setAuth(true);
    }
  ).catch(
    () => {
      setAuth(false)
      console.log("Login Failed");
    }
  )}

export default function Login(props) {
  const { preferences,setPreferences,setAuth } = props;
  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              label="Datapower"
              name="Datapower"
              autoFocus
              onChange={(e) => {
                preferences.datapower = e.target.value;
              }}
              defaultValue={preferences.datapower}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              name="Username"
              autoFocus
              onChange={(e) => {
                preferences.username = e.target.value;
              }}
              defaultValue={preferences.username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => {
                preferences.password = e.target.value;
              }}
              defaultValue={preferences.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" 
              checked={preferences.save}
              onChange={(e) => {
                setPreferences({...preferences,save:e.target.checked})
              }}
              />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              onClick={()=>{handleLogin(preferences,setAuth)}}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 1, mb: 4 }} />
      </Container>
  );
}
