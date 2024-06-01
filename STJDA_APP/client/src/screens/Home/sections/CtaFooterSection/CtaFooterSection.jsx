import React from "react";
import { Button } from "../../../../components/Button";
import styled from "styled-components";

const StyledCtaFooterSection = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 100%;

  & .CTA-section {
    align-items: flex-start;
    align-self: stretch;
    box-shadow: var(--drop-shadow);
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 764px;
    justify-content: flex-end;
    padding: 0px 100px;
    position: relative;
    width: 100%;
    z-index: 1;
  }

  & .contents-3 {
    align-items: center;
    align-self: stretch;
    background-image: url(https://c.animaapp.com/I4tqUSkw/img/contents.png);
    background-position: 50% 50%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 750px;
    padding: 24px 24px 0px;
    position: relative;
    width: 100%;
    border-radius: 35%;
    @media (max-width: 768px) {

    }
  }
  

  & .photo-4 {
    // background-image: url(https://c.animaapp.com/I4tqUSkw/img/photo-3.png);
    width: auto;
  }

  & .text-5 {
    align-items: flex-start;
    background-color: #2f4f68;
    border-radius: 50px;
    display: inline-flex;
    flex: 0 0 auto;
    padding: 8px 24px;
    margin: 0 auto 0 0;
    position: relative;
  }

  & .text-wrapper-20 {
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

  & .title {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    position: relative;
  }

  & .text-wrapper-21 {
    color: #2f4f68;
    font-family: var(--heading-2-font-family);
    font-size: var(--heading-2-font-size);
    font-style: var(--heading-2-font-style);
    font-weight: var(--heading-2-font-weight);
    letter-spacing: var(--heading-2-letter-spacing);
    line-height: var(--heading-2-line-height);
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-22 {
    color: var(--black);
    font-family: var(--paragraph-font-family);
    font-size: var(--paragraph-font-size);
    font-style: var(--paragraph-font-style);
    font-weight: var(--paragraph-font-weight);
    letter-spacing: var(--paragraph-letter-spacing);
    line-height: var(--paragraph-line-height);
    opacity: 0.5;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .button-12 {
    height: 64px;
    left: 1136px;
    position: absolute;
    top: 374px;
    width: 64px;
  }

  & .footer-section {
    align-items: flex-start;
    align-self: stretch;
    background-color: var(--blue);
    display: flex;
    flex-direction: column;
    gap: 88px;
    height: 960px;
    justify-content: flex-end;
    margin-top: -503px;
    padding: 0px 0px 32px;
    position: relative;
    width: 100%;
    z-index: 0;
  }

  & .texts-newsletter {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 56px;
    padding: 0px 100px;
    position: relative;
    width: 100%;
  }

  & .texts {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    position: relative;
    width: 100%;
  }

  & .STJDA-is-a-non {
    align-self: stretch;
    color: var(--white);
    font-family: var(--paragraph-font-family);
    font-size: var(--paragraph-font-size);
    font-style: var(--paragraph-font-style);
    font-weight: var(--paragraph-font-weight);
    letter-spacing: var(--paragraph-letter-spacing);
    line-height: var(--paragraph-line-height);
    margin-top: -1px;
    opacity: 0.5;
    position: relative;
    text-align: center;
  }

  & .menu-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 40px;
    justify-content: center;
    position: relative;
    width: 100%;
  }

  & .newsletter {
    height: 108px;
    position: relative;
    width: 690px;
  }

  & .email-address {
    align-items: center;
    background-color: var(--white);
    border-radius: 50px;
    display: flex;
    left: 0;
    padding: 12px 40px;
    position: absolute;
    top: 60px;
    width: 545px;
  }

  & .text-wrapper-23 {
    color: var(--black);
    font-family: var(--heading-6-font-family);
    font-size: var(--heading-6-font-size);
    font-style: var(--heading-6-font-style);
    font-weight: var(--heading-6-font-weight);
    letter-spacing: var(--heading-6-letter-spacing);
    line-height: var(--heading-6-line-height);
    margin-top: -1px;
    opacity: 0.5;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .button-13 {
    background-color: #2f4f68 !important;
    left: 545px !important;
    padding: 12px 32px !important;
    position: absolute !important;
    top: 60px !important;
  }

  & .text-wrapper-24 {
    color: var(--white);
    font-family: var(--heading-3-font-family);
    font-size: var(--heading-3-font-size);
    font-style: var(--heading-3-font-style);
    font-weight: var(--heading-3-font-weight);
    left: 179px;
    letter-spacing: var(--heading-3-letter-spacing);
    line-height: var(--heading-3-line-height);
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
  }

  & .copyright-policy {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    justify-content: flex-end;
    padding: 0px 100px;
    position: relative;
    width: 100%;
  }

  & .line-2 {
    align-self: stretch;
    background-color: var(--light-gray);
    height: 1px;
    opacity: 0.25;
    position: relative;
    width: 100%;
  }

  & .texts-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }

  & .text-wrapper-25 {
    color: var(--white);
    font-family: var(--heading-6-font-family);
    font-size: var(--heading-6-font-size);
    font-style: var(--heading-6-font-style);
    font-weight: var(--heading-6-font-weight);
    letter-spacing: var(--heading-6-letter-spacing);
    line-height: var(--heading-6-line-height);
    margin-top: -1px;
    opacity: 0.5;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .privacy-policy-user {
    color: var(--white);
    font-family: var(--heading-6-font-family);
    font-size: var(--heading-6-font-size);
    font-style: var(--heading-6-font-style);
    font-weight: var(--heading-6-font-weight);
    letter-spacing: var(--heading-6-letter-spacing);
    line-height: var(--heading-6-line-height);
    margin-top: -1px;
    opacity: 0.5;
    position: relative;
    text-align: right;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const CtaFooterSection = () => {
  return (
    <StyledCtaFooterSection>
      <div className="CTA-section">
        <div className="contents-3">
          <div className="photo-4">
            <div className="text-5">
              <div className="text-wrapper-20">Camp Freedom 2023</div>
            </div>
          </div>
          <div className="title">
            {/* <p className="text-wrapper-21">Be part of a Childs Hope Today</p> */}
            {/* <p className="text-wrapper-22">Empower Families, Inspire Children, and Build a Healthier Community.</p> */}
          </div>
          <div className="button-12" />
        </div>
      </div>
      <div className="footer-section">
        <div className="texts-newsletter">
          <div className="texts">
            <p className="STJDA-is-a-non">
              STJDA is a non-profit organization dedicated to empowering families touched by juvenile diabetes,
              <br /> and promoting healthier lifestyles that benefit our entire community..
            </p>
            <div className="menu-2">
              <div className="text-wrapper-20">Contact Us</div>
            </div>
          </div>
          <div className="newsletter">
            <div className="email-address">
              <p className="text-wrapper-23">Enter your email address ...</p>
            </div>
            <Button className="button-13" property1="filled" text2="Subscribe" />
            <div className="text-wrapper-24">Subscribe to Newsletter</div>
          </div>
        </div>
        <div className="copyright-policy">
          <div className="line-2" />
          <div className="texts-2">
            <p className="text-wrapper-25">Copyright © STJDA 2023. All rights reserved.</p>
            <p className="privacy-policy-user">Privacy Policy | User Policy | Terms &amp; Condition</p>
          </div>
        </div>
      </div>
    </StyledCtaFooterSection>
  );
};
