import React, {useState} from "react";
import styled from "styled-components";
import { SignInForm, CreateAccountForm, MedicalForm } from "./form";
import { SignUpImage } from "./SignUpSection/index";
import { Modal, Box, Typography, Button, Checkbox, FormControlLabel, CircularProgress } from "@mui/material";
import { useNavigate } from 'react-router-dom'; 

export const SignUpSection = () => {

    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [createUser, setCreateUser] = useState(false);
    const [useMedForm, setUseMedForm] = useState(false);
    const [nonMedForm, setNonMedForm] = useState()
    const [formsData, setFormsData] = useState()
    const [spinner, setSpinner] = useState()

    const handleMedFormUpdate_Swap =(bool, form) =>{
      setNonMedForm(form)
      setUseMedForm(bool);
    }

    const submitUser = async (theFormData) =>{
      if (termsAccepted && (theFormData.role === 'volunteer')) {
          try{
              const response = await fetch('http://localhost:3000/api/signup/create', {
                  method: 'POST', // Specify the method
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  credentials: 'include',
                  body: JSON.stringify(theFormData)
              });
              const data = await response.text();
              if(response.ok){
                // Get the last part, which is the URL
                const url = data.split(' ').slice(-1)[0]; 
                // Parse the URL and get the pathname
                const pathname = new URL(url).pathname;
                navigate(pathname)
              }
            }catch(err){
              console.log(err)
            }
      }else if(termsAccepted && (theFormData.role === 'camper')) {
          try{
            const response = await fetch('http://localhost:3000/api/signup/create', {
                method: 'POST', // Specify the method
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(theFormData)
            });
            const data = await response.text();
            if(response.ok){
              // Get the last part, which is the URL
              const url = data.split(' ').slice(-1)[0]; 
              // Parse the URL and get the pathname
              const pathname = new URL(url).pathname;
              navigate(pathname)
            }
          }catch(err){
            console.log(err)
          }
      }else{
        alert('Oops! 😅 Doesnt look like you accepted the terms: \n To create an account you must accept the terms')
      }
    }

    const handleAcceptTerms = (dataFromForm) => {
      setFormsData(dataFromForm)
    };

    return (
      <StyledImage>
        <Box className="rectangle">
          <Box className='image'>
            <SignUpImage />
            
          </Box>
          <Box className='form'>
            {
            createUser && !useMedForm ? 
            <CreateAccountForm 
              setTermsAccepted={setTermsAccepted} 
              handleAcceptTerms={handleAcceptTerms}
              openModal={setModalOpen} 
              medForm={handleMedFormUpdate_Swap} 
              createUser={setCreateUser} 
            /> 
            : 
            createUser && useMedForm ? <MedicalForm 
            goBack={setUseMedForm} 
            formData={nonMedForm} 
            setTermsAccepted={setTermsAccepted}
            handleAcceptTerms={handleAcceptTerms} 
            openModal={setModalOpen} 
            />
            :
            <SignInForm createUser={setCreateUser} />
            }
          </Box>

          <Modal
            open={modalOpen}
            disableEscapeKeyDown
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                width: 400, 
                bgcolor: 'background.paper', 
                border: '2px solid #000', 
                boxShadow: 24, 
                p: 4 
              }}>

              <Typography id="modal-modal-title" variant="h6" component="h2">
              {useMedForm ? 'Camper Terms & Conditions' : 'Volunteer Terms & Conditions'}
              </Typography>
              {
                spinner ? <CircularProgress /> 
                  : 
                <Typography id="modal-modal-description" sx={{ mt: 2, maxHeight: 300, overflow: 'auto' }}>
                  {
                  useMedForm ? 
                  'Med form Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.'
                    : 
                  'Volunteer form Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.'  
                  }
                </Typography>
              }
              {
                spinner ? null
                : 
                <FormControlLabel
                control={<Checkbox checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />}
                label="I accept the terms and conditions"
                />
              }
              {
                spinner ? null 
                  :
                <Box mt={2} display="flex" justifyContent="space-between">
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={() => {
                        setSpinner(true);
                        setTimeout(() => {
                          setSpinner(false);
                          submitUser(formsData);
                        }, 1500);  // 1500 milliseconds delay
                      }}>
                      OK
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => {setTermsAccepted(false); setModalOpen(false);}}>
                        Cancel
                    </Button>
                </Box>
              }
            </Box>
          </Modal>
        </Box>
      </StyledImage>
    );
  };

const StyledImage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;

  & .rectangle {
    display: flex;
    width: 100vh;
    
  }

  & .image {
    flex: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  & .form {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    max-height: 75vh;
    // transform: translateX(10%);
    
  }

  @media (max-width: 768px) {
    & .rectangle {
      flex-direction: column;
      align-items: center;
    }

    & .form {
      margin: 20px;
      width: 90%;
      max-width: 75vw;
      transform: none;

    }
  }
`;
