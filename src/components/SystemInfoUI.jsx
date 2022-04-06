import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function SystemInfoUI(props) {
  const { system,progress } = props;
  
  return (
    <React.Fragment>
        <Box sx={{
          textAlign: 'center',
        }}>
        <Typography
    >{system}</Typography>
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        {progress !== 'loading' ? <CircularProgress variant="determinate" value={progress}/> : <CircularProgress/>}
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {progress !== 'loading' ? `${Math.round(progress)}%` : ''}
          </Typography>
        </Box>
      </Box>
      </Box></React.Fragment>
  )
}
