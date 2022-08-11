import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Outlet, useNavigate} from 'react-router-dom';
import NavBar from './NavBar';

function Workshop({token, setToken}) {
  const navigate = useNavigate();

  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (logout) {
      navigate('/');
    }
  }, [logout, navigate]);

  useEffect(() => {
    if (logout) {
      console.log('removing token...');
      localStorage.removeItem('token');
      setLogout(false);
      setToken('');
    }
  }, [logout, setToken]);

  const requestLogout = () => {
    setLogout(true);
  };

  return (
    <Box sx={{flexGrow: 1}}>
      <NavBar requestLogout={requestLogout} />
      <Typography>Workshop</Typography>
      <Outlet />
    </Box>
  );
}

export default Workshop;
