import * as React from 'react';
import styled from '@mui/system/styled';
import Grid from '@mui/material/Grid';
import './App.css';
import Heading from './Components/Heading.js';
import AddTask from './Components/AddTask.js';
import TaskList from './Components/TaskList.js';


const MainGlass = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#111928bf' : '#ffffffbf',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#ffffff20' : '#d1d5db4d',
  padding: theme.spacing(2),
  paddingBottom: theme.spacing(4),
  borderRadius: '12px',
  textAlign: 'center',
  backdropFilter: 'blur(16px) saturate(180%)',
  '-webkit-backdrop-filter': 'blur(16px) saturate(180%)',
  transition: 'box-shadow 0.3s ease-in-out', // Add quotes around the property name

  '&:hover': {
    boxShadow: '0px 0px 10px 0px #000000', // No need for the property name in the hover state
  },
}));

// ==============================|| APP ||============================== //

const App = () => {

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" >
    <Grid item lg={6} md={8} xs={12} m={3} >
    <MainGlass>
      <Heading />
      <AddTask />
      <TaskList />
      </MainGlass>
    </Grid>
    </Grid>
  );
};

export default App;