import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  position: relative;

  & .learn-more {
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

  &.line {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: var(--orange);
  }

  &.outline {
    border: 1px solid;
    border-color: var(--blue);
    border-radius: 50px;
    padding: 8px 32px;
  }

  &.filled {
    background-color: var(--orange);
    border-radius: 50px;
    padding: 8px 32px;
  }

  &.short {
    background-color: var(--blue);
    border-radius: 5px;
    padding: 16px 40px;
  }

  &.line .learn-more {
    color: var(--orange);
  }

  &.outline .learn-more {
    color: var(--blue);
  }

  &.filled .learn-more {
    color: var(--white);
  }

  &.short .learn-more {
    color: var(--white);
  }
`;

export const Button = ({
  property1,
  className,
  divClassName,
  text = "Register",
  text1 = "Donate",
  text2 = "Donate Now"
}) => {
  return (
    <StyledButton className={`button ${property1} ${className}`}>
      <div className={`learn-more ${divClassName}`}>
        {property1 === "line" && <>Learn More</>}

        {property1 === "outline" && <>{text}</>}

        {property1 === "filled" && <>{text2}</>}

        {property1 === "short" && <>{text1}</>}
      </div>
    </StyledButton>
  );
};

Button.propTypes = {
  property1: PropTypes.oneOf(["line", "filled", "outline", "short"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string
};
