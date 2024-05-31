import React from "react";
import { Button } from "../../../../../../components/Button";
import styled from "styled-components";

const StyledNavigation = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  margin-right: -46px;
  position: relative;
  width: 1286px;

  & .company-logo {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 306px;
    position: relative;
  }

  & .company-logo-2 {
    background-image: url(https://c.animaapp.com/I4tqUSkw/img/screenshot-2024-05-23-at-6-18-1@2x.png);
    background-position: 50% 50%;
    background-size: cover;
    height: 118px;
    position: relative;
    width: 118px;
  }

  & .menu {
    height: 26px;
    margin-right: -14px;
    position: relative;
    width: 599px;
  }

  & .home {
    align-items: center;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-color: var(--black);
    display: flex;
    justify-content: center;
    left: 142px;
    padding: 0px 0px 2px;
    position: absolute;
    top: 0;
    width: 55px;
  }

  & .text-wrapper-4 {
    color: var(--black);
    font-family: var(--heading-5-font-family);
    font-size: var(--heading-5-font-size);
    font-style: var(--heading-5-font-style);
    font-weight: var(--heading-5-font-weight);
    letter-spacing: var(--heading-5-letter-spacing);
    line-height: var(--heading-5-line-height);
    margin-top: -2px;
    position: relative;
    width: 55px;
  }

  & .text-wrapper-5 {
    color: var(--black);
    font-family: var(--heading-6-font-family);
    font-size: var(--heading-6-font-size);
    font-style: var(--heading-6-font-style);
    font-weight: var(--heading-6-font-weight);
    left: 59px;
    letter-spacing: var(--heading-6-letter-spacing);
    line-height: var(--heading-6-line-height);
    opacity: 0.5;
    position: absolute;
    top: 1px;
    width: 70px;
  }

  & .text-wrapper-6 {
    color: var(--black);
    font-family: var(--heading-6-font-family);
    font-size: var(--heading-6-font-size);
    font-style: var(--heading-6-font-style);
    font-weight: var(--heading-6-font-weight);
    left: 0;
    letter-spacing: var(--heading-6-letter-spacing);
    line-height: var(--heading-6-line-height);
    opacity: 0.5;
    position: absolute;
    top: 2px;
    width: 50px;
  }

  & .text-wrapper-7 {
    color: var(--black);
    font-family: var(--heading-6-font-family);
    font-size: var(--heading-6-font-size);
    font-style: var(--heading-6-font-style);
    font-weight: var(--heading-6-font-weight);
    left: 211px;
    letter-spacing: var(--heading-6-letter-spacing);
    line-height: var(--heading-6-line-height);
    opacity: 0.5;
    position: absolute;
    top: 1px;
    width: 77px;
  }

  & .text-wrapper-8 {
    color: var(--black);
    font-family: var(--heading-6-font-family);
    font-size: var(--heading-6-font-size);
    font-style: var(--heading-6-font-style);
    font-weight: var(--heading-6-font-weight);
    left: 300px;
    letter-spacing: var(--heading-6-letter-spacing);
    line-height: var(--heading-6-line-height);
    opacity: 0.5;
    position: absolute;
    top: 1px;
    width: 66px;
  }

  & .text-wrapper-9 {
    color: var(--black);
    font-family: var(--heading-6-font-family);
    font-size: var(--heading-6-font-size);
    font-style: var(--heading-6-font-style);
    font-weight: var(--heading-6-font-weight);
    left: 373px;
    letter-spacing: var(--heading-6-letter-spacing);
    line-height: var(--heading-6-line-height);
    opacity: 0.5;
    position: absolute;
    top: 1px;
    width: 70px;
  }

  & .text-wrapper-10 {
    color: var(--black);
    font-family: var(--heading-6-font-family);
    font-size: var(--heading-6-font-size);
    font-style: var(--heading-6-font-style);
    font-weight: var(--heading-6-font-weight);
    left: 453px;
    letter-spacing: var(--heading-6-letter-spacing);
    line-height: var(--heading-6-line-height);
    opacity: 0.5;
    position: absolute;
    top: 1px;
    width: 69px;
  }

  & .text-wrapper-11 {
    color: var(--black);
    font-family: var(--heading-6-font-family);
    font-size: var(--heading-6-font-size);
    font-style: var(--heading-6-font-style);
    font-weight: var(--heading-6-font-weight);
    left: 524px;
    letter-spacing: var(--heading-6-letter-spacing);
    line-height: var(--heading-6-line-height);
    opacity: 0.5;
    position: absolute;
    top: 1px;
    width: 61px;
  }

  & .button-2 {
    background-color: #1479cc !important;
    display: flex !important;
    width: 84px !important;
  }

  & .button-3 {
    color: var(--light-gray) !important;
    margin-left: -28px !important;
    margin-right: -28px !important;
  }

  & .button-4 {
    background-color: #1479cc !important;
    display: flex !important;
    width: 71px !important;
  }

  & .button-5 {
    color: var(--light-gray) !important;
    margin-left: -25px !important;
    margin-right: -25px !important;
  }

  & .button-6 {
    background-color: #1479cc !important;
    display: flex !important;
    width: 99px !important;
  }
`;

export const Navigation = () => {
  return (
    <StyledNavigation>
      <div className="company-logo">
        <div className="company-logo-2" />
        <div className="menu">
          <div className="home">
            <div className="text-wrapper-4">Camps</div>
          </div>
          <div className="text-wrapper-5">Programs</div>
          <div className="text-wrapper-6">Events</div>
          <div className="text-wrapper-7">Resources</div>
          <div className="text-wrapper-8">Coalition</div>
          <div className="text-wrapper-9">Sponsors</div>
          <div className="text-wrapper-10">About Us</div>
          <div className="text-wrapper-11">Contact</div>
        </div>
      </div>
      <Button className="button-2" divClassName="button-3" property1="outline" text="Volunteer" />
      <Button className="button-4" divClassName="button-5" property1="outline" text="Donate" />
      <Button className="button-6" divClassName="button-3" property1="outline" text="Board Login" />
    </StyledNavigation>
  );
};
