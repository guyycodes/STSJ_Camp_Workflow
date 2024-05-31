import React from "react";
import { Card } from "../../../../../../../../components/Card";
import styled from "styled-components";

const StyledItems = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 100%;

  & .item {
    box-shadow: 0px 4px 4px #00000040 !important;
  }

  & .card-1 {
    background-color: unset !important;
    background-image: url(https://c.animaapp.com/I4tqUSkw/img/photo-4@2x.png) !important;
    background-position: 50% 50% !important;
    background-size: cover !important;
  }

  & .card-instance {
    background: unset !important;
    background-color: #1479cc !important;
  }

  & .card-1-instance {
    border: unset !important;
    border-color: unset !important;
    box-shadow: 0px 4px 4px #00000040 !important;
  }

  & .design-component-instance-node {
    background-color: unset !important;
    background-image: url(https://c.animaapp.com/I4tqUSkw/img/photo-5@2x.png) !important;
    background-position: 50% 50% !important;
    background-size: cover !important;
  }
`;

export const Items = () => {
  return (
    <StyledItems>
      <Card
        buttonText="Learn More"
        className="item"
        hasAmountReached={false}
        hasProgressBar={false}
        photoClassName="card-1"
        property1="ver-1"
        saveButton="https://c.animaapp.com/I4tqUSkw/img/save-button-2.svg"
        text="A Summer Experience Where Every Child Thrives"
        text1="Our mission is focused on breaking down barriers to diabetes management education for children, empowering youth with knowledge is the key."
        text2="Camp Freedom"
        textClassName="card-instance"
      />
      <Card
        buttonText="Learn More"
        className="card-1-instance"
        hasAmountReached={false}
        hasProgressBar={false}
        img="https://c.animaapp.com/I4tqUSkw/img/save-button-3.svg"
        photoClassName="design-component-instance-node"
        property1="ver-2"
        text="Empowering Youth through Education for All"
        text1="By equipping children and their families with essential skills and knowledge, we&#39;re not just managing diabetes—we&#39;re transforming lives."
        text2="Robotics Camp"
        textClassName="card-instance"
      />
    </StyledItems>
  );
};
