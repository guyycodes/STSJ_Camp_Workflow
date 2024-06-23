import React, {useEffect} from "react";
import { Container, Box, Typography, Button, Grid, Paper, Avatar } from '@mui/material';
import { UserAboutCard } from "./UserSections/AboutSection.jsx";

export const ProfileLanding =()=>{

 return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper
        sx={{
          position: 'relative',
          height: 300, // Increased the height of the banner
          backgroundColor: 'grey.200',
          mb: 8, // Increased the margin bottom
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          px: 4,
          pb: 2,
          width: '80vw',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Avatar
            sx={{
              width: 150, // Increased the size of the profile photo
              height: 150,
              border: '4px solid white',
              mr: 3,
            }}
            src="/path-to-profile-photo.jpg"
            alt="Jessica Smith"
          />
          <Typography variant="h4" component="h1" sx={{ color: 'white' }}>
            Jessica Smith
          </Typography>
        </Box>
        <Button variant="contained" color="primary">
          Edit Cover Photo
        </Button>
      </Paper>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 6 }}>
        <Button variant="contained" color="secondary" size="large">
          Edit Profile
        </Button>
        <Button variant="contained" color="error" size="large">
          Logout
        </Button>
      </Box>
      <Grid container spacing={4}>
        {/* Uncomment these components and import them as necessary */}
        <Grid item xs={12} md={4}>
          <UserAboutCard />
        </Grid>
        {/* <Grid item xs={12} md={4}>
          <Camps />
        </Grid> */}
      </Grid>
    </Container>
  );
};
  