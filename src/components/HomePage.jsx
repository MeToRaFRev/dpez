import React,{useEffect,useState} from 'react';
import axios from 'axios'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SystemInfoUI from './SystemInfoUI.jsx';
import Button from '@mui/material/Button'
import { CssBaseline } from '@mui/material';




export default function Homepage(props) {

  const [systemInfo, setSystemInfo] = useState({
    CPUStatus: 'loading',
    MemoryStatus: 'loading',
    FilesystemStatus: 'loading',
  })

  const {preferences} = props;
  const token = btoa(`${preferences.username}:${preferences.password}`);
  const headers = {headers: {'Authorization': `Basic ${token}`}}
  
  const handleSystemInfo = async () => {
    try {
      let cpuStats, memoryStats, filesystemStats;
      const cpuResponse = await axios.get(`http://${preferences.datapower}/Tools/rest-cors/mgmt/status/default/CPUUsage`, headers)
      if (cpuResponse.data.CPUUsage) {
        cpuStats = cpuResponse.data.CPUUsage.tenSeconds
      } else {
        cpuStats = 'loading'
        console.log('CPU stats not available')
      }
      
      const memoryResponse = await axios.get(`http://${preferences.datapower}/Tools/rest-cors/mgmt/status/default/MemoryStatus`, headers)
      if (memoryResponse.data.MemoryStatus) {
        memoryStats = (parseInt(memoryResponse.data.MemoryStatus.UsedMemory) / parseInt(memoryResponse.data.MemoryStatus.TotalMemory)) * 100
      } else {
        memoryStats = 'loading'
        console.log('Memory stats not available')
      }

      const filesystemResponse = await axios.get(`http://${preferences.datapower}/Tools/rest-cors/mgmt/status/default/FilesystemStatus`, headers)
      if (filesystemResponse.data.FilesystemStatus) {
        filesystemStats = 100 - parseInt(filesystemResponse.data.FilesystemStatus.FreeEncrypted) / parseInt(filesystemResponse.data.FilesystemStatus.TotalEncrypted) * 100
      } else {
        filesystemStats = 'loading'
        console.log('Filesystem stats not available')
      }

      setSystemInfo({
        CPUStatus: cpuStats,
        MemoryStatus: memoryStats,
        FilesystemStatus: filesystemStats,
      })

    } catch (error) {
      console.log(error.msg)
    }
  }


useEffect(() => {
  handleSystemInfo();

  // setTimeout(() => {
  //   setInterval( handleSystemInfo, 5000);
  // }, 5000);
}, []);

  return (
    <React.Fragment>
      <CssBaseline/>
      <Paper sx={{display: 'flex', padding: '0rem 1rem', justifyContent: 'space-evenly'}}>
        <SystemInfoUI system="CPU" progress={systemInfo.CPUStatus}/>
        <SystemInfoUI system="Memory" progress={systemInfo.MemoryStatus}/>
        <SystemInfoUI system="Filesystem" progress={systemInfo.FilesystemStatus}/>
        <Button sx={{
          display:'absolute',
          right: '0',
          }}>test</Button>
      </Paper>
    </React.Fragment>)}
