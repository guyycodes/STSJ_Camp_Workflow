import React from 'react';
import { Box} from '@mui/material';
import { LandingPage } from './screens/Home/Landing';
import { ProfileContainer } from './screens/Profile/ProfileContainer';
import { ProfileRedirect } from './screens/Profile/User/Redirects';
// import { ProfileLanding } from './screens/Profile/User/ProfileBanner';
import { SignUpSection, Unauthorized } from './screens/Login';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      {/* to-do finsih responsive styling for mobile/tablets */}
        <Route path="/" index element={<LandingPage />} />
          {/* to-do */}
          {/* to-do finsih responsive styling for mobile/tablets */}
          <Route path="/login" element={<SignUpSection />} />
          <Route path="/profile" element={<ProfileRedirect />} />
          <Route path="/profile/authenticated" element={<ProfileContainer />} />
          <Route path="/error=emailNotVerified" element={<Unauthorized />} />
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
     

        <RouterProvider router={router}/> 
         
   
    </>
  );
}

export default App;
