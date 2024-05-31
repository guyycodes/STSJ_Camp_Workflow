import { useState } from 'react';
import { Container, Box, CssBaseline, useTheme } from '@mui/material';

function App() {

  const headerHeight = '64px';

  return (
    <>
      <CssBaseline />
      <Box 
        display='flex' 
        flexDirection='column' 
        minHeight='100vh'
      >
        <Box 
          component='header'
          position='fixed'
          top={0}
          width='100%'
          left={0}
          zIndex='tooltip'
          height={headerHeight}
        >

        </Box>
        

        

    
      </Box>
    </>
  );
}

export default App;
