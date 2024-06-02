import React from "react";
import styled from "styled-components";

export const SignInForm = () => {
  return (
    <StyledSignInForm>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="company-logo" />
        </div>
      </div>
    </StyledSignInForm>
  );
};

const StyledSignInForm = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  


  & .overlap-group-wrapper {
    background-color: var(--white);
    max-width: 1440px;
    width: 100%;
    height: auto;
    @media (max-width: 768px) {
        flex-direction: column;
      }
  }

  & .overlap-group {
    background-image: url(https://c.animaapp.com/XHfJEvc2/img/sign-in-form-desktop.png);
    background-position: 50% 50%;
    background-size: cover;
    height: 900px;
    width: 1432px;
  }

  & .company-logo {
    background-image: url(https://c.animaapp.com/XHfJEvc2/img/screenshot-2024-05-23-at-6-18-1@2x.png);
    background-position: 50% 50%;
    background-size: cover;
    height: 118px;
    left: 492px;
    position: relative;
    top: 37px;
    width: 118px;
  }
`;