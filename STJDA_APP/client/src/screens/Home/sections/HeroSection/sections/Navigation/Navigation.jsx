import React from "react";
import { Button as MuiButton, Menu, MenuItem } from '@mui/material';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const StyledNavigation = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-right: -46px;
    position: relative;
    width: auto;
  

    & .company-logo {
      align-items: center;
      display: flex;
      gap: auto;
      position: relative;
  
      @media (max-width: 768px) {
        gap: 20px; // Reduce gap for smaller screens
      }
    }

  & .company-logo-2 {
    background-image: url(https://c.animaapp.com/I4tqUSkw/img/screenshot-2024-05-23-at-6-18-1@2x.png);
    background-position: 50% 50%;
    background-size: cover;
    height: 118px;
    position: relative;
    width: 118px;
  
  @media (max-width: 768px) {
    height: 80px; // Reduce logo size for smaller screens
    width: 80px;
  }
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

  & .button-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & .button {
    border-radius: 30% !important;
    text-transform: none !important;
  }

  & .button-2 {
    background-color: #1479cc !important;
    display: flex !important;
    color: var(--light-gray) !important;
    width: 84px !important;
    padding: 2px;
  }

  & .button-3 {
    color: var(--light-gray) !important;
    margin-left: -28px !important;
    margin-right: -28px !important;
  }

  & .button-4 {
    background-color: #1479cc !important;
    display: flex !important;
    color: var(--light-gray) !important;
    width: 71px !important;
    padding: 2px;
  }

  & .button-5 {
    color: var(--light-gray) !important;
    margin-left: -25px !important;
    margin-right: -25px !important;
  }

  & .button-6 {
    background-color: #1479cc !important;
    display: flex !important;
    color: var(--light-gray) !important;
    width: 99px !important;
    padding: 2px;
  }

  & .about-us-dropdown {
    display: inline-block;
    position: relative;
  }

  & .about-us-dropdown:hover .dropdown-content {
    display: block;
  }

  & .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  & .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  & .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
`;


export const Navigation = () => {
    const [anchorElAbout, setAnchorElAbout] = React.useState(null);
    const [anchorElResources, setAnchorElResources] = React.useState(null);
    const [anchorElCamps, setAnchorElCamps] = React.useState(null);
    const navigate = useNavigate();

    const goTo = (address) => {
      navigate(address);
    };
    const handleClick = (event, menuType) => {
      switch(menuType) {
        case "About":
          setAnchorElAbout(event.currentTarget);
          break;
        case "Resources":
          setAnchorElResources(event.currentTarget);
          break;
        case "Camps":
          setAnchorElCamps(event.currentTarget);
          break;
        default:
          break;
      }
    };

    const handleClose = () => {
      setAnchorElCamps(null);
      setAnchorElResources(null);
      setAnchorElAbout(null);
    };

  return (
    <StyledNavigation>
      <div className="company-logo">
        <div className="company-logo-2" />
        <div className="menu">
          <div className="home">
            <div className="text-wrapper-4 dropdown"
              onMouseEnter={(e)=>handleClick(e, "Camps")}
            >Camps
            </div>
            <Menu
              anchorEl={anchorElCamps}
              open={Boolean(anchorElCamps)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => goTo('/example-path')}>Camp Application</MenuItem>
              <MenuItem onClick={() => goTo('/example-path')}>Parents Handbook</MenuItem>
            </Menu>
          </div>
          <div className="text-wrapper-5">Programs</div>
          <div className="text-wrapper-6">Events</div>
          <div className="dropdown" onMouseLeave={handleClose}>
            <div className="text-wrapper-7 dropdown"
              onMouseEnter={(e)=>handleClick(e, "Resources")}
            >Resources
            </div>
            <Menu
              anchorEl={anchorElResources}
              open={Boolean(anchorElResources)}
              onClose={handleClose}
            >
            <MenuItem onClick={() => goTo('/example-path')}>What is Diabetes</MenuItem>
            <MenuItem onClick={() => goTo('/example-path')}>Instructional Videos</MenuItem>
            <MenuItem onClick={() => goTo('/example-path')}>Inspiring Videos</MenuItem>
            <MenuItem onClick={() => goTo('/example-path')}>Halloween Guide</MenuItem>
            <MenuItem onClick={() => goTo('/example-path')}>504 Plan</MenuItem>
            <MenuItem onClick={() => goTo('/example-path')}>Travel Checklist</MenuItem>
            <MenuItem onClick={() => goTo('/example-path')}>Surviving the Holidays</MenuItem>
            <MenuItem onClick={() => goTo('/example-path')}>Sick Days Video</MenuItem>
            </Menu>
          </div>
          <div className="text-wrapper-8">Coalition</div>
          <div className="text-wrapper-9">Sponsors</div>
          <div className="about-us-dropdown" onMouseLeave={handleClose}>
            <div className="text-wrapper-10 about-us-dropdown" 
            onMouseEnter={(e)=>handleClick(e, "About")}
            >
            About Us
            </div>
            <Menu
                anchorEl={anchorElAbout}
                open={Boolean(anchorElAbout)}
                onClose={handleClose}
                onMouseLeave={() => handleClose()}
                
            >
            <MenuItem onClick={() => goTo('/example-path')}>Mission</MenuItem>
            <MenuItem onClick={() => goTo('/example-path')}>Staff and Board</MenuItem>
            <MenuItem onClick={() => goTo('/example-path')}>Updates for Covid-19</MenuItem>
            </Menu>
        </div>
          <div className="text-wrapper-11">Contact</div>
        </div>
      </div>
      <MuiButton className="button button-2" variant="contained">
        Volunteer
      </MuiButton>
      <MuiButton className="button button-4" variant="contained">
        Donate
      </MuiButton>
      <MuiButton className="button button-6" variant="contained">
        Board Login
      </MuiButton>
    </StyledNavigation>
  );
};
