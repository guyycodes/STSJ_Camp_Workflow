import React from "react";
import { Button as MUIButton } from "@mui/material";
import styled from "styled-components";

const StyledTitleTextsButton = styled.div`
  align-items: flex-end;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 124px;
  margin-right: -48px;
  position: relative;

  & .giving-hope-creating {
    color: transparent;
    font-family: var(--heading-1-font-family);
    font-size: var(--heading-1-font-size);
    font-style: var(--heading-1-font-style);
    font-weight: var(--heading-1-font-weight);
    letter-spacing: var(--heading-1-letter-spacing);
    line-height: var(--heading-1-line-height);
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  & .span {
    color: #2f4f68;
    font-family: var(--heading-1-font-family);
    font-size: var(--heading-1-font-size);
    font-style: var(--heading-1-font-style);
    font-weight: var(--heading-1-font-weight);
    letter-spacing: var(--heading-1-letter-spacing);
    line-height: var(--heading-1-line-height);
    @media (max-width: 768px) {
      font-size: var(--heading-3-font-size);
      line-height: var(--heading-5-line-height);
    }
  }

  & .text-wrapper-12 {
    color: #1479cc;
    font-family: var(--heading-1-font-family);
    font-size: var(--heading-1-font-size);
    font-style: var(--heading-1-font-style);
    font-weight: var(--heading-1-font-weight);
    letter-spacing: var(--heading-1-letter-spacing);
    line-height: var(--heading-1-line-height);
    @media (max-width: 768px) {
      font-size: var(--heading-3-font-size);
      line-height: var(--heading-5-line-height);
    }
  }

  & .text-buttons {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    position: relative;
  }

  & .text-wrapper-13 {
    color: var(--black);
    font-family: var(--paragraph-font-family);
    font-size: var(--paragraph-font-size);
    font-style: var(--paragraph-font-style);
    font-weight: var(--paragraph-font-weight);
    letter-spacing: var(--paragraph-letter-spacing);
    line-height: var(--paragraph-line-height);
    margin-top: -1px;
    opacity: 0.75;
    position: relative;
    width: 658px;
  }

  & .buttons {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 24px;
    position: relative;
  }


  & .button-9 {
    color: var(--black) !important;
  }
`;

export const TitleTextsButton = () => {
  return (
    <StyledTitleTextsButton>
      <p className="giving-hope-creating">
        <span className="span">Giving </span>
        <span className="text-wrapper-12">Hope</span>
        <span className="span">
          ,<br />
          Creating Impact
        </span>
      </p>
      <div className="text-buttons">
        <p className="text-wrapper-13">
          We are deeply committed to inspiring hope and making a meaningful difference in the lives of young people
          affected by diabetes.
        </p>
        <div className="buttons">
          <MUIButton variant="contained" style={{ backgroundColor: '#1479cc' }}>Learn More</MUIButton>
          <MUIButton variant="outlined" style={{ borderColor: 'var(--black)', color: 'var(--black)' }}>Donate</MUIButton>
        </div>
      </div>
    </StyledTitleTextsButton>
  );
};
