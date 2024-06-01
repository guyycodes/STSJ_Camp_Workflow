import React from 'react';
import { Container} from '@mui/material';
import {LandingPage} from './screens/Home/Landing';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" index element={<LandingPage />} />
          {/* create Service and booking routed in another route called protected routes */}
          {/* <Route path="/aboutUs" index element={<Home />} /> */}
          {/* <Route path="/gallery" index element={<Home />} /> */}
          {/* <Route path="/blog" index element={<Home />} /> */}
     
          {/* <Route path="/contact" index element={<Home />} /> */}
          {/* <Route path="/search" index element={<Home />} /> */}
          {/* Reviews page Route */}
          {/* <Route path="/reviews" element={<ProtectedRoutes element={<Reviews />} />} /> */}

          {/* Privacy Policy Route */}
          {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
          {/* Terms of use Route */}
          {/* <Route path="/terms" element={<TermsAndConditions />} /> */}
      </>
      )
    )

  return (
    <>
        <Container>

        <RouterProvider router={router}/> 
         
        </Container>
    </>
  );
}

export default App;
