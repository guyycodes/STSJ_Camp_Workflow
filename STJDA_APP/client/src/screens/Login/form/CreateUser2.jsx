import React, { useState, useEffect, useRef } from 'react';
import { Container, TextField, Button, Box, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { validateNewAccount } from "../../../util/validateLogin/validateNewAccount";

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

export const MedicalForm = ({openModal ,handleAcceptTerms ,setTermsAccepted ,formData, goBack}) => {
  let valid;
  const formRef = useRef(null);
  const errorsRef = useRef(null);
  const loginForm = formRef.current;
  const [errors, setErrors] = useState({});
  const [carbs, setCarbs] = useState({
    Breakfast: '',
    Lunch: '',
    Dinner: ''
  });
  const [insulin, setInsulin] = useState({
    Breakfast: '',
    Lunch: '',
    Dinner: ''
  });
  const [medFormData, setMedFormData] = useState({
    InsulinToCarbRatio: '',
    correctionFactor: '',
    target: '',
    insulinType: '',
    allergies: '',
    otherDiagnosis: '',
    overTheCounterMeds: ''
  });

  const formatRatio = (event) => {
    const { name, value } = event.target;
    
    if (name.includes('carbs')) {
      // Extract meal type from the input name (e.g., 'carbsBreakfast')
      const mealType = name.replace('carbs', '');
      setCarbs(prevCarbs => ({
        ...prevCarbs,
        [mealType]: value // Dynamically update the correct meal type
      }));
    } else if (name.includes('insulin')) {
      const mealType = name.replace('insulin', '');
      setInsulin(prevInsulin => ({
        ...prevInsulin,
        [mealType]: value // Dynamically update the correct meal type
      }));
    }
  };
  

  useEffect(() => {
    // Update InsulinToCarbRatio whenever carbs or insulin changes
    setMedFormData(prevState => ({
      ...prevState,
      ...formData
    }));
    
  }, []);

  useEffect(() => {
    // Update InsulinToCarbRatio whenever carbs or insulin changes
    setMedFormData(prevState => ({
      ...prevState,
      InsulinToCarbRatio: {
        Breakfast: `${insulin.Breakfast} : ${carbs.Breakfast}`,
        Lunch: `${insulin.Lunch} : ${carbs.Lunch}`,
        Dinner: `${insulin.Dinner} : ${carbs.Dinner}`
      }
    }));
    }, [carbs, insulin]);

  useEffect(() => {
    // handle logic for sending data off to the server here
      console.log(medFormData)
  }, [medFormData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
        setMedFormData({
            ...medFormData,
            [name]: value
        });
        // Clear error when user starts typing
        clearErrors(name,value)
  }

    const clearErrors = (name, value) => {
      let err = {};
        // Clear error when user starts typing
        Array.from(loginForm.elements).forEach(element => { // if theres errors put them in an array
          if (element.required && element.value.trim() === '') {
              // add elements to the err object
              err[element.name] = 'Required';
          }});
          // set the updated object
          setErrors({...err})

    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // const loginForm = formRef.current; this is set globally
      const newErrors = {};
  
      Array.from(loginForm.elements).forEach(element => { // if theres errors put them in an array
        if (element.required && element.value.trim() === '') {
            valid = false;
            newErrors[element.name] = 'This field is required';
        }
      });
      // check if errors has no elements in it
      if (Object.keys(errors).length === 0)
        valid = true;
      
       // set the errrors to state
      if (valid) {
        console.log('Form submitted:', medFormData);
        openModal(true)
      } else {
        // put the errors into the textfeild
        const errorsList = Object.values(errors).join(', ');
        setErrors(errorsList)
        console.log('Form has errors:', newErrors);
      }
      setErrors(newErrors);
    };

  return (
    <Container component="main" maxWidth="sm">
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
      <Typography variant="h6" gutterBottom>
        Medical Information Form
      </Typography>
      <Box
        component="form"
        ref={formRef}
        sx={{ mt: 1 }}
        noValidate
        onSubmit={(e) => {
          setTermsAccepted(false)
          handleAcceptTerms(medFormData)
          handleSubmit(e)
        }}
      >
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
                variant="outlined"
                multiline
                rows={1} // Ensures a minimum height
                value={errors ? 'Red feilds reqired, \nComplete as much as possible': ""}
                ref={errorsRef}                    // Reference to access the DOM node
                sx={{
                  '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                          border: 'none', // Removes the border
                      },
                      '&:hover fieldset': {
                          border: 'none', // Ensures the border is removed even on hover
                      },
                      '&.Mui-focused fieldset': {
                          border: 'none', // Ensures the border is removed when the TextField is focused
                      }
                  },
                  '& .MuiInputBase-root': {
                      height: '3rem', // Sets the overall component height
                      overflow: 'auto' // Hides overflowed content
                  },
                  '& .MuiInputBase-inputMultiline': {
                      color: 'red', // Makes the text color red
                      overflow: 'auto', // Allows scrolling within the input area
                      minHeight: '3rem', // Ensures the input doesn't grow beyond 3rem
                  }
              }}
          />
        </Box>
        <Typography fontSize={16} mb={-1} p={0}> Insulin to Carb Ratio (Breakfast/Lunch/Dinner)</Typography>
        <Box display="flex" alignItems="center">
          <TextField
            margin="normal"
            required
            id="insulinBreakfast"
            label="InsulinBreakfast"
            name="insulinBreakfast"
            error={insulin == '' ? true : false}
            autoComplete="insulinBreakfast"
            autoFocus
            type="number" 
            onChange={formatRatio}
            value={medFormData.insulin}
            sx={{ marginRight: 1 }}
          />
          <Typography variant="h6" sx={{ marginRight: 1 }}>:</Typography>
          <TextField
            margin="normal"
            required
            id="carbsBreakfast"
            label="CarbsBreakfast"
            name="carbsBreakfast"
            type="number" 
            error={carbs == '' ? true : false}
            autoComplete="carbsBreakfast"
            onChange={formatRatio}
            value={medFormData.carbs}
          />  <Typography variant="h4" sx={{ mx: 1 }}> / </Typography>
          <TextField
            margin="normal"
            required
            id="insulinLunch"
            label="InsulinLunch"
            name="insulinLunch"
            error={insulin == '' ? true : false}
            autoComplete="insulinLunch"
            autoFocus
            type="number" 
            onChange={formatRatio}
            value={medFormData.insulin}
            sx={{ marginRight: 1 }}
          />
          <Typography variant="h6" sx={{ marginRight: 1 }}>:</Typography>
          <TextField
            margin="normal"
            required
            id="carbsLunch"
            label="CarbsLunch"
            name="carbsLunch"
            type="number" 
            error={carbs == '' ? true : false}
            autoComplete="carbsLunch"
            onChange={formatRatio}
            value={medFormData.carbs}
          />  
          <Typography variant="h4" sx={{ mx: 1 }}> / </Typography>
          <TextField
            margin="normal"
            required
            id="insulinDinner"
            label="InsulinDinner"
            name="insulinDinner"
            error={insulin == '' ? true : false}
            autoComplete="insulinDinner"
            autoFocus
            type="number" 
            onChange={formatRatio}
            value={medFormData.insulin}
            sx={{ marginRight: 1 }}
          />
          <Typography variant="h6" sx={{ marginRight: 1 }}>:</Typography>
          <TextField
            margin="normal"
            required
            id="carbsDinner"
            label="CarbsDinner"
            name="carbsDinner"
            type="number" 
            error={carbs == '' ? true : false}
            autoComplete="carbs"
            onChange={formatRatio}
            value={medFormData.carbs}
          />
          
        </Box>
        <TextField
          margin="normal"
          required
          fullWidth
          name="correctionFactor"
          label="Correction Factor"
          type="text"
          id="correctionFactor"
          error={medFormData.correctionFactor == '' ? true : false}
          autoComplete="correctionFactor"
          onChange={handleChange}
          value={medFormData.correctionFactor}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="target"
          label="Target"
          type="number" 
          id="target"
          error={medFormData.target == '' ? true : false}
          autoComplete="target"
          onChange={handleChange}
          value={medFormData.target}
        />
          <TextField
            margin="normal"
            required
            fullWidth
            name="allergies"
            label="Known Allergies"
            type="text"
            id="allergies"
            error={medFormData.allergies == '' ? true : false}
            autoComplete="allergies"
            onChange={handleChange}
            value={medFormData.allergies}
          />
        <TextField
          margin="normal"
          required
          fullWidth
          name="insulinType"
          label="Insulin Type"
          type="text"
          id="insulinType"
          autoComplete="insulinType"
          multiline
          error={medFormData.insulinType == '' ? true : false}
          rows={2}
          onChange={handleChange}
          value={medFormData.insulinType}
        />
          <TextField
            margin="normal"
            fullWidth
            required
            name="overTheCounterMeds"
            label="Over The Counter Medications"
            type="text"
            id="overTheCounterMeds"
            autoComplete="overTheCounterMeds"
            error={medFormData.overTheCounterMeds == '' ? true : false}
            multiline
            rows={2}
            onChange={handleChange}
            value={medFormData.overTheCounterMeds}
          />
        <TextField
          margin="normal"
          fullWidth
          name="otherDiagnosis"
          label="Other Diagnosis"
          type="text"
          id="otherDiagnosis"
          autoComplete="otherDiagnosis"
          multiline
          rows={2}
          onChange={handleChange}
          value={medFormData.otherDiagnosis}
        />
        <Box mt={2}>
          <Button
            color="secondary"
            type="submit"
            variant="contained"
            onClick={() => goBack(!true)}
          >
            Go Back
          </Button>
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          endIcon={<ChevronRightIcon />}
        >
          Submit
        </Button>
      </Box>
      </motion.div>
    </Container>
  );
}
