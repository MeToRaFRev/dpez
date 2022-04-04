import React,{useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import {grabLocalStorage, useLocalStorage } from "../Hooks/useLocalStorage.js";
import axios from 'axios';
import Darkmode from './Darkmode.jsx';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


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


const handleLogin = (login,setLogin) => {
  if(login.save === true){
    localStorage.setItem('login',JSON.stringify(login));
  }
  const token = btoa(login.username+":"+login.password)
  axios.get('http://'+login.datapower+'/Tools/rest-cors/mgmt/actionqueue/default',
  {headers: {
    'Access-Control-Allow-Credentials': true,
    'Authorization': `Basic ${token}` }
  }
  ).then(res => {
    console.log(res.data)
    setLogin(...login,...{authenticated:true})
  }).catch(err => {
    console.log(err)
  })
}

export default function Auth() {
  const [login, setLogin] = useLocalStorage( 'login',{datapower:"",username:"",password:"",save:false,authenticated:false} );
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
                login.datapower = e.target.value;
              }}
              defaultValue={grabLocalStorage(login)?.datapower === "" ? grabLocalStorage(login)?.datapower : login.datapower}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              name="Username"
              autoFocus
              onChange={(e) => {
                login.username = e.target.value;
              }}
              defaultValue={login.username}
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
                login.password = e.target.value;
              }}
              defaultValue={login.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" 
              checked={login.save}
              onChange={(e) => {
                setLogin({...login,save:e.target.checked})

              }}
              />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              onClick={()=>{handleLogin(login,setLogin)}}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 1, mb: 4 }} />
      </Container>
  );
}
