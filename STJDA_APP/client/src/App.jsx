import React from 'react';
import { Container, Box, useTheme, Typography } from '@mui/material';
import {LandingPage} from './screens/Home/Landing';
function App() {
  const theme = useTheme(); // Use the theme
  const headerHeight = '64px'; // Example fixed header height

  return (
    <>


        <Container sx={{ flexGrow: 1 }}>
          <LandingPage />
        </Container>
        {/* Additional content should go here, ensuring proper closing of Box components */}

    </>
  );
}

export default App;
