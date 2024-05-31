import React from "react";
import { Button } from "../../../../../../components/Button";
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
  }

  & .text-wrapper-12 {
    color: #1479cc;
    font-family: var(--heading-1-font-family);
    font-size: var(--heading-1-font-size);
    font-style: var(--heading-1-font-style);
    font-weight: var(--heading-1-font-weight);
    letter-spacing: var(--heading-1-letter-spacing);
    line-height: var(--heading-1-line-height);
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

  & .button-7 {
    background-color: #1479cc !important;
    flex: 0 0 auto !important;
  }

  & .button-8 {
    border-color: var(--black) !important;
    flex: 0 0 auto !important;
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
          <Button className="button-7" property1="filled" />
          <Button className="button-8" divClassName="button-9" property1="line" />
        </div>
      </div>
    </StyledTitleTextsButton>
  );
};
