import React from "react";
import styled from "styled-components";

const StyledPhotoNumbers = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  position: relative;
  width: 100%;

  & .img {
    align-self: stretch;
    flex: 0 0 auto;
    object-fit: cover;
    position: relative;
    width: 100%;
  }

  & .numbers {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }

  & .item-7 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 8px;
    position: relative;
  }

  & .text-wrapper-14 {
    color: var(--blue);
    font-family: var(--heading-3-font-family);
    font-size: var(--heading-3-font-size);
    font-style: var(--heading-3-font-style);
    font-weight: var(--heading-3-font-weight);
    letter-spacing: var(--heading-3-letter-spacing);
    line-height: var(--heading-3-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-15 {
    color: var(--black);
    font-family: var(--paragraph-font-family);
    font-size: var(--paragraph-font-size);
    font-style: var(--paragraph-font-style);
    font-weight: var(--paragraph-font-weight);
    letter-spacing: var(--paragraph-letter-spacing);
    line-height: var(--paragraph-line-height);
    opacity: 0.75;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .ellipse-2 {
    background-color: #1479cc;
    border-radius: 6px;
    height: 12px;
    position: relative;
    width: 12px;
  }
`;

export const PhotoNumbers = () => {
  return (
    <StyledPhotoNumbers>
      <img className="img" alt="Photo" src="https://c.animaapp.com/I4tqUSkw/img/photo.png" />
      <div className="numbers">
        <div className="item-7">
          <div className="text-wrapper-14">$1M+</div>
          <div className="text-wrapper-15">Fund Raised</div>
        </div>
        <div className="ellipse-2" />
        <div className="item-7">
          <div className="text-wrapper-14">500+</div>
          <div className="text-wrapper-15">Dedicated Volunteers</div>
        </div>
        <div className="ellipse-2" />
        <div className="item-7">
          <div className="text-wrapper-14">100%</div>
          <div className="text-wrapper-15">Delivered Donations</div>
        </div>
        <div className="ellipse-2" />
        <div className="item-7">
          <div className="text-wrapper-14">250K</div>
          <div className="text-wrapper-15">Charity Participation</div>
        </div>
      </div>
    </StyledPhotoNumbers>
  );
};
