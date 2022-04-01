import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ApiRoundedIcon from '@mui/icons-material/ApiRounded';
import SoapRoundedIcon from '@mui/icons-material/SoapRounded';
import CardMembershipRoundedIcon from '@mui/icons-material/CardMembershipRounded';
import NetworkPingRoundedIcon from '@mui/icons-material/NetworkPingRounded';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import PestControlRoundedIcon from '@mui/icons-material/PestControlRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import HomePage from './HomePage.jsx'
import MPGW from './MPGW.jsx';
import WSP from './WSP.jsx';
import Certificates from './Certificates.jsx';
import Network from './Network.jsx';
import Settings from './Settings.jsx';
import Troubleshoot from './Troubleshoot.jsx';
import Control from './Control.jsx';
import Darkmode from './Darkmode.jsx';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [shownPage,setShownPage] = React.useState('home');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleHomeClick = () => {
    setShownPage('home');
    } 
  const handleMPGWClick = () => {
    setShownPage('mpgw');
    }
const handleWSPClick = () => {
    setShownPage('wsp');
    }
const handleCertificatesClick = () => {
    setShownPage('certificates');
    }
const handleNetworkClick = () => {
    setShownPage('network');
    }

const handleSettingsClick = () => {
    setShownPage('settings');
    }
const handleTroubleshootClick = () => {
    setShownPage('troubleshoot');
    }
const handleControlClick = () => {
    setShownPage('control');
    }

const navbarClick = (page) =>{
    console.log(page+" Clicked");
    switch(page) {
        case 'mpgw':
            return <MPGW />
        case 'wsp':
            return <WSP />
        case 'certificates':
            return <Certificates />
        case 'network':
            return <Network />
        case 'home':
            return <HomePage />
        case 'settings':
            return <Settings />
        case 'troubleshoot':
            return <Troubleshoot />
        case 'control':
            return <Control />
        default:
            return <HomePage />
    }

    }


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Button variant="text" sx={{color:"white",fontSize:"17px"}} onClick={()=>handleHomeClick()}>
            Datapower Easy Tool
          </Button>
          <Darkmode/>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['MPGW', 'WSP', 'Certificates', 'Network'].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
                onClick={text === 'MPGW' ? handleMPGWClick : text === 'WSP' ? handleWSPClick : text === 'Certificates' ? handleCertificatesClick : text === 'Network' ? handleNetworkClick : null}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {text === "MPGW" ? <ApiRoundedIcon /> :
                text === "WSP" ? <SoapRoundedIcon /> :
                text === "Certificates" ? <CardMembershipRoundedIcon /> : text === "Network" ? <NetworkPingRoundedIcon /> : <DisabledByDefaultRoundedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <List>
          {['Settings', 'Troubleshoot', 'Control'].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={text === 'Settings' ? handleSettingsClick : text === 'Troubleshoot' ? handleTroubleshootClick : text === 'Control' ? handleControlClick : null}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {text === "Settings" ? <SettingsSuggestRoundedIcon /> :
                text === "Troubleshoot" ? <PestControlRoundedIcon /> :
                text === "Control" ? <BuildRoundedIcon /> : <DisabledByDefaultRoundedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
            {
                navbarClick(shownPage)
            }
      </Box>
    </Box>
  );
}