import React from "react";
import { Card } from "../../../../../../../../components/Card";
import styled from "styled-components";
import { Button as MuiButton} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ItemsWrapper = () => {

  const navigate = useNavigate(); // Hook for navigation

  // Function to handle button click
  const handleNavigate = () => {

    // check auth, when you have auth

    navigate('/login'); // Navigate to /login when the button is clicked
  };

  return (
    <StyledItemsWrapper className="items-wrapper">
      <Card
          buttonComponent={
          <MuiButton 
            className='item-2 button' 
            variant="contained" 
            color="primary"
            onClick={handleNavigate}
          >
            Learn More
          </MuiButton>
        }
        className="item-2"
        hasAmountReached={false}
        hasProgressBar={false}
        photoClassName="item-3"
        property1="ver-1"
        text="Empowerment Through Education at Camp"
        text1="Through interactive, supportive, and fun learning experiences, we help each camper to understand their condition, and achieve their goals."
        text2="Science Camp"
        textClassName="item-4"
      />
      <Card
        buttonComponent={
          <MuiButton 
            className='item-2 button' 
            variant="contained" 
            color="primary"
            onClick={handleNavigate}
          >
            Learn More
          </MuiButton>
        }
        className="item-5"
        hasAmountReached={false}
        hasProgressBar={false}
        photoClassName="item-6"
        property1="ver-1"
        text="Be Part of Something Bigger"
        text1="We ensure that no child is left behind because of Join us in this crucial mission—because every child deserves the right to a healthy future."
        text2="Nature Camp"
        textClassName="item-4"
      />
    </StyledItemsWrapper>
  );
};

const StyledItemsWrapper = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 100%;

  & .item-2 {
    box-shadow: 0px 4px 4px #00000040 !important;
  }

  & .item-3 {
    background-color: unset !important;
    background-image: url(https://c.animaapp.com/I4tqUSkw/img/photo-6@2x.png) !important;
    background-position: 50% 50% !important;
    background-size: cover !important;
    height: 60%; /* Added for visibility */
    width: 100%; /* Added for visibility */
  }

  & .item-4 {
    background: unset !important;
    background-color: #1479cc !important;
  }

  & .item-5 {
    border: unset !important;
    border-color: unset !important;
    box-shadow: 0px 4px 4px #00000040 !important;
  }

  & .item-6 {
    background-color: unset !important;
    background-image: url(https://c.animaapp.com/I4tqUSkw/img/photo-7@2x.png) !important;
    background-position: 50% 50% !important;
    background-size: cover !important;
    height: 60%; /* Added for visibility */
    width: 100%; /* Added for visibility */
  }

  & .button{
    background-color: var(--blue);
    padding: 8px 24px;
  }
`;