import React from "react";
import { Items } from "./sections/Items";
import { ItemsWrapper } from "./sections/ItemsWrapper";
import { TitlePages } from "./sections/TitlePages";
import styled from "styled-components";

const StyledDonationSection = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 28px;
  height: 1508px;
  justify-content: flex-end;
  padding: 0px 188px 0px 213px;
  position: relative;
  width: 100%;
`;

export const DonationSection = () => {
  return (
    <StyledDonationSection>
      <TitlePages />
      <Items />
      <ItemsWrapper />
    </StyledDonationSection>
  );
};
