import React from "react";
import { Button } from "../../../../components/Button";
import styled from "styled-components";

const StyledAboutUsSection = styled.div`
  align-items: center;
  align-self: stretch;
  background-image: url(https://c.animaapp.com/I4tqUSkw/img/about-us-section.png);
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  padding: 64px 100px;
  position: relative;
  width: 100%;

  & .ornament {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 20px;
    position: relative;
  }

  & .photo-2 {
    align-items: flex-end;
    background-image: url(https://c.animaapp.com/I4tqUSkw/img/photo-1.png);
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 25px;
    display: flex;
    gap: 8px;
    height: 266px;
    padding: 0px 0px 16px 16px;
    position: relative;
    width: 570px;
  }

  & .div-wrapper {
    align-items: center;
    border: 1px solid;
    border-color: var(--white);
    border-radius: 50px;
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    padding: 8px 24px;
    position: relative;
  }

  & .text-wrapper-16 {
    color: var(--white);
    font-family: var(--heading-5-font-family);
    font-size: var(--heading-5-font-size);
    font-style: var(--heading-5-font-style);
    font-weight: var(--heading-5-font-weight);
    letter-spacing: var(--heading-5-letter-spacing);
    line-height: var(--heading-5-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .numbers-photo {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 20px;
    position: relative;
  }

  & .numbers-2 {
    align-items: flex-start;
    background-color: #1479cc;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 16px;
    position: relative;
    width: 190px;
  }

  & .vector-2 {
    flex: 0 0 auto;
    position: relative;
  }

  & .text-3 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 4px;
    position: relative;
  }

  & .text-wrapper-17 {
    color: var(--white);
    font-family: var(--heading-3-font-family);
    font-size: var(--heading-3-font-size);
    font-style: var(--heading-3-font-style);
    font-weight: var(--heading-3-font-weight);
    letter-spacing: var(--heading-3-letter-spacing);
    line-height: var(--heading-3-line-height);
    margin-top: -1px;
    position: relative;
    text-shadow: 0px 4px 4px #00000040;
    white-space: nowrap;
    width: fit-content;
  }

  & .children-are-living {
    color: var(--white);
    font-family: var(--heading-6-font-family);
    font-size: var(--heading-6-font-size);
    font-style: var(--heading-6-font-style);
    font-weight: var(--heading-6-font-weight);
    letter-spacing: var(--heading-6-letter-spacing);
    line-height: var(--heading-6-line-height);
    opacity: 0.75;
    position: relative;
    width: fit-content;
  }

  & .photo-3 {
    flex: 0 0 auto;
    height: 170px;
    object-fit: cover;
    position: relative;
  }

  & .contents-2 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 56px;
    padding: 118px 0px 0px;
    position: relative;
  }

  & .text-4 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    position: relative;
  }

  & .text-wrapper-18 {
    color: var(--blue);
    font-family: var(--heading-2-font-family);
    font-size: var(--heading-2-font-size);
    font-style: var(--heading-2-font-style);
    font-weight: var(--heading-2-font-weight);
    letter-spacing: var(--heading-2-letter-spacing);
    line-height: var(--heading-2-line-height);
    margin-top: -1px;
    position: relative;
    width: 610px;
  }

  & .text-wrapper-19 {
    color: var(--black);
    font-family: var(--paragraph-font-family);
    font-size: var(--paragraph-font-size);
    font-style: var(--paragraph-font-style);
    font-weight: var(--paragraph-font-weight);
    letter-spacing: var(--paragraph-letter-spacing);
    line-height: var(--paragraph-line-height);
    opacity: 0.5;
    position: relative;
    width: 610px;
  }

  & .button-10 {
    border-color: var(--black) !important;
    flex: 0 0 auto !important;
  }

  & .button-11 {
    color: #1479cc !important;
  }
`;

export const AboutUsSection = () => {
  return (
    <StyledAboutUsSection>
      <div className="ornament">
        <div className="photo-2">
          <div className="div-wrapper">
            <div className="text-wrapper-16">Volunteers</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-16">Charity</div>
          </div>
        </div>
        <div className="numbers-photo">
          <div className="numbers-2">
            <img className="vector-2" alt="Vector" src="https://c.animaapp.com/I4tqUSkw/img/vector-1.svg" />
            <div className="text-3">
              <div className="text-wrapper-17">1.1 Million</div>
              <p className="children-are-living">
                children are living <br />
                with Type 1 diabetes.
              </p>
            </div>
          </div>
          <img className="photo-3" alt="Photo" src="https://c.animaapp.com/I4tqUSkw/img/photo-2.png" />
        </div>
      </div>
      <div className="contents-2">
        <div className="text-4">
          <p className="text-wrapper-18">Volunteers - A Beacon of Hope and Health</p>
          <p className="text-wrapper-19">
            Our Camps are more than just a summer camps—they are a vital part of our mission to empower young lives
            touched by diabetes. As a volunteer, you play a pivotal role in this transformative journey, helping to
            shape a brighter, healthier future for children in South Texas and beyond.
          </p>
        </div>
        <Button className="button-10" divClassName="button-11" property1="line" />
      </div>
    </StyledAboutUsSection>
  );
};
