import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from 'components/Header';

import Container from '@mui/material/Container';

import React from 'react';
import './App.css';

import { displayOnDesktop } from 'themes/commonStyles';
import OptionsTab from 'components/OptionsTab';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflowY: 'scroll',
          }}
        >
          <Container maxWidth='xl' sx={{ mb: 3 }}>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            ></Box>
          </Container>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}></Box>
        <Box sx={displayOnDesktop}></Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
