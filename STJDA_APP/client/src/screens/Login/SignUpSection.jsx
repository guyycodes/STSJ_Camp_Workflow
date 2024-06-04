import React from "react";
import styled from "styled-components";
import { SignInForm } from "./form";
import { SignUpImage } from "./SignUpSection/SignUpImg";
import { Box } from "@mui/material";

export const SignUpSection = () => {
    return (
      <StyledImage>
        <Box className="rectangle">
          <Box className='image'>
            <SignUpImage />
          </Box>
          <Box className='form'>
            <SignInForm />
          </Box>
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
