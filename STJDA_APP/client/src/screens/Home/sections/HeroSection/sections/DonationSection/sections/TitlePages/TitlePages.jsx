import React from "react";
import styled from "styled-components";

const StyledTitlePages = styled.div`
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 100%;

  & .text-2 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    position: relative;
  }

  & .p {
    color: var(--blue);
    font-family: var(--heading-2-font-family);
    font-size: var(--heading-2-font-size);
    font-style: var(--heading-2-font-style);
    font-weight: var(--heading-2-font-weight);
    letter-spacing: var(--heading-2-letter-spacing);
    line-height: var(--heading-2-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-3 {
    color: var(--black);
    font-family: var(--paragraph-font-family);
    font-size: var(--paragraph-font-size);
    font-style: var(--paragraph-font-style);
    font-weight: var(--paragraph-font-weight);
    letter-spacing: var(--paragraph-letter-spacing);
    line-height: var(--paragraph-line-height);
    opacity: 0.5;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .pages {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 40px;
    margin-left: -139px;
    position: relative;
  }

  & .left-arrow {
    height: 14.73px;
    margin-left: -1px;
    position: relative;
    width: 49px;
  }

  & .right-arrow {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    position: relative;
  }

  & .arrow {
    height: 14.73px;
    position: relative;
    width: 49px;
    z-index: 1;
  }

  & .ellipse {
    background-color: #1479cc;
    border-radius: 20px;
    height: 40px;
    margin-left: -20px;
    position: relative;
    width: 40px;
    z-index: 0;
  }
`;

export const TitlePages = () => {
  return (
    <StyledTitlePages>
      <div className="text-2">
        <p className="p">Transforming Lives - Through Camp</p>
        <p className="text-wrapper-3">See how a camp can make a difference in the world for generations.</p>
      </div>
      <div className="pages">
        <img className="left-arrow" alt="Left arrow" src="https://c.animaapp.com/I4tqUSkw/img/left-arrow.svg" />
        <div className="right-arrow">
          <img className="arrow" alt="Arrow" src="https://c.animaapp.com/I4tqUSkw/img/arrow.svg" />
          <div className="ellipse" />
        </div>
      </div>
    </StyledTitlePages>
  );
};
