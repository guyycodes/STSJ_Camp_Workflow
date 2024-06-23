import React, {useState, useEffect, useRef} from "react";
import { Container, 
  TextField, 
  Button, 
  Typography, 
  MenuItem, 
  Select, 
  InputLabel, 
  FormControl, 
  Checkbox, 
  FormControlLabel, 
  Avatar,
  Box } 
  from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { countryCodes } from '../../../util/content/countryCodes';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { validateNewAccount } from "../../../util/validateLogin/validateNewAccount";


// Styled components for more control
const Input = styled(TextField)({
  marginTop: 8,
  marginBottom: 8,
});

export const CreateAccountForm = ({setTermsAccepted, handleAcceptTerms, openModal, createUser, medForm }) => {

  const loginFormRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+1 🇺🇸',
    role: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    notifications: false,
    profileImage: null,
  });

  useEffect(() => {
    // This code runs whenever formData changes for checking proper function
    console.log("FormData updated: ", formData);
  }, [formData]);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

// convert image into base64 string
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(loadEvent) {
        const base64 = loadEvent.target.result;
        setFormData(prevState => ({
          ...prevState,
          profileImage: base64
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => { // validates inputs
    event.preventDefault();
    const loginForm = loginFormRef.current;
    validateNewAccount(formData.email, formData.password, formData.confirmPassword, loginForm)
    .then((result) => {
      if (result === 0) { // form validation function returns 0 if there are no errors
        if(formData.role === 'volunteer'){
          console.log('The result is 0');
          openModal(true)
          handleAcceptTerms(formData)
        }else if(formData.role === 'camper'){ // cause the med form to be loaded up
           medForm(true, formData)
        }
      }else{
        return
      }
    })
    .catch((error) => {
      console.error('Error during validation', error);
    });
  };

  const pageVariants = {
    initial: { opacity: 0, x: '100%' },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: '-100%' },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  return (
    <Container component="main" maxWidth="xs">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{
          alignItems: 'flex-start',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '20px',
          position: 'relative',
          width: 'auto',
          height: 'fit-content',
          border: '1px solid #d9d9d9',
          borderRadius: '8px',
        }}
      >
        <Typography component="h1" variant="h5">
          Create Account
        </Typography>
        <form>
          <Box display="flex" justifyContent="flex-start" mt={2} mb={2}>
            <Avatar
             src={formData.profileImage 
              ? (formData.profileImage instanceof File
                  ? URL.createObjectURL(formData.profileImage)
                  : formData.profileImage)                     // Base64 or fallback image path
              : "path/to/default-profile-picture.jpg"}
              sx={{ width: 56, height: 56, marginRight: 2 }}
            />
            <TextField
            ref={loginFormRef}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none', // Removes the border
                },
                '&:hover fieldset': {
                  border: 'none', // border is removed even on hover
                },
                '&.Mui-focused fieldset': {
                  border: 'none', // border is removed when the TextField is focused
                }}}}
          />
          </Box>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
            id="profile-image-upload"
          />
          <label htmlFor="profile-image-upload">
            <Button variant="contained" component="span" >
              Upload Profile Image
            </Button>
          </label>
          <Box display="flex" justifyContent="space-between">
            <Input
              variant="outlined"
              type="text"
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={{ marginRight: '8px' }}
            />
            <Input
              variant="outlined"
              type="text"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            type="date"
            label="Date of Birth"
            name="dateOfBirth"
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.dateOfBirth}
            onChange={handleChange}
            style={{ marginTop: '8px' }}
          />
          <Input
            fullWidth
            variant="outlined"
            type="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Box display="flex" alignItems="center" mb={1}>
            <FormControl variant="outlined" style={{ marginRight: '8px', width: '120px' }}>
              <InputLabel id="country-code-label">Code</InputLabel>
              <Select
                labelId="country-code-label"
                value={formData.countryCode}
                label="Code"
                onChange={handleChange}
                name="countryCode"
              >
                {countryCodes.map((country) => (
                  <MenuItem onChange={handleChange} key={country.code} value={country.code}>
                    {country.code}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              type="tel"
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
            />
          </Box>
          <FormControl fullWidth>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              value={formData.role}
              label="Role"
              onChange={handleChange}
              name="role"
            >
              <MenuItem value="camper">Camper</MenuItem>
              <MenuItem value="volunteer">Volunteer</MenuItem>
            </Select>
          </FormControl>
          <Input
            fullWidth
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            fullWidth
            variant="outlined"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox checked={formData.notifications} onChange={handleChange} name="notifications" />}
            label={formData.role === 'camper' ?"Receive important notifications about your child at camp?" : "Receive important notifications?"}
          />
          <Box mt={2} mb={2}>
            <Button
              color="secondary"
              type="submit"
              variant="contained"
              onClick={() => createUser(false)}
            >
              Go Back
            </Button>
          </Box>
          {
          formData.role === 'volunteer' ?           
          <Button onClick={(e) => {
            // modal is located int the SignUpSection.jsx component which is the root for the sign in forms
            handleSubmit(e)
            setTermsAccepted(false)
            }} 
            type="submit" fullWidth variant="contained" color="primary" endIcon={<ChevronRightIcon />}>
            Submit
          </Button> 
          :
          <Button 
          onClick={(e) =>{
            const node = document.querySelector(".messages")
            handleSubmit(e)
          }} 
           type="submit" fullWidth variant="contained" color="primary" endIcon={<ChevronRightIcon />}>
            Next
          </Button>
          }
        </form>
      </motion.div>
    </Container>
  );
}
