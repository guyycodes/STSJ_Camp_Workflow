import React from 'react';
import { Container} from '@mui/material';
import {LandingPage} from './screens/Home/Landing';
function App() {


  return (
    <>


        <Container maxWidth>
          <LandingPage />
        </Container>
        {/* Additional content should go here, ensuring proper closing of Box components */}

    </>
  );
}

export default App;
