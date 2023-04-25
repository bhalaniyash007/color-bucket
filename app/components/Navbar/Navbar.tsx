'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@components/Typography/Typography';

const AppLogo = () => {
  return (
    <>
      <Toolbar>
        <div
          className="logo-vector"
          style={{
            width: '30px',
            height: '30px',
            background: 'linear-gradient(90deg,#E6425E 0%,#A64166 100%)',
            border: '2px',
          }}></div>
        <p>
          <Typography tag="h5" text="Color Bucket" color={'GrayText'} fontWeight={600} />
        </p>
      </Toolbar>
    </>
  );
};

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: '#FFFFFF',
          boxShadow: 'none',
          zIndex: 2,
        }}>
        <AppLogo />
      </AppBar>
    </Box>
  );
}
