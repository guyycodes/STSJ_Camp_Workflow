import React, { useState } from "react";
import icons from '../../assets/iconRegistry';
import { ProfileLanding } from './User/ProfileBanner';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const ProfileContainer = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selected, setSelected] = useState(0)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const handleTabSelection = (int) => {
    switch (int) {
      case 0:
        setSelected(0);
        break;
      case 1:
        setSelected(1);
        break;
      case 2:
        setSelected(2);
        break;
      case 3:
        setSelected(3);
        break;
      default:
        setSelected(0); // Set to 0 by default to maintain the Profile as dark if no specific button is selected
        break;
    }
  }

  return (
    <Box
      sx={{
        backgroundColor: '#f7f7f8',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100vw',
      }}
    >
      <Box className="overlap-wrapper" sx={{
        backgroundColor: '#f7f7f8',
        width: '100vh',
        overflow: 'hidden',
        width: '100vw',
      }}>
        <Box className="overlap" sx={{
          height: '1186px',
          position: 'relative',
          width: isSidebarOpen ? '225px' : '50px',
          transition: 'width 0.3s ease-in-out',
        }}>
          <Box className="menu" sx={{
            height: '100%',
            position: 'absolute',
            top: 0,
            width: '100%',
          }}>
            <Box className="overlap-group" sx={{ position: 'relative' }}>
              <Box className="BG" sx={{
                backgroundColor: '#1479cc',
                height: '100vh',
                position: 'absolute',
                top: 0,
                width: isSidebarOpen ? '218px' : '50px',
                transition: 'width 0.3s ease-in-out',
              }} />
              <IconButton
                sx={{
                  position: 'absolute',
                  top: '20px',
                  right: '-25px',
                  backgroundColor: '#1479cc',
                  color: 'white',
                  borderRadius: '50%',
                  zIndex: 1,
                  transform: isSidebarOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease-in-out',
                }}
                onClick={toggleSidebar}
              >
                <ChevronRightIcon />
              </IconButton>
              {isSidebarOpen && (
                <>
                  <Box className="logo" sx={{
                    position: 'absolute',
                    top: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '100px',
                    backgroundImage: `url(${icons.logo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }} />
                  <Box className="menu-name" sx={{ position: 'absolute', top: '234px', width: '169px' }}>
                    <Button
                    onClick={() => handleTabSelection(2)}
                      sx={{
                        position: 'absolute',
                        top: '45px',
                        transform: 'translateX(10%)',
                        scale: '1.25',
                        width: '129px',
                        padding: 0,
                        minWidth: 'unset',
                        // left: -10,
                      }}
                    >
                      <img alt="My Camper" src={selected == 2 ? icons.myCamperDark : icons.myCamperLight} style={{ width: '100%' }} />
                    </Button>
                    <Button
                    onClick={() => handleTabSelection(1)}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        width: '129px',
                        padding: 0,
                        
                        minWidth: 'unset',
                      }}
                    >
                      <img alt="Profile" src={selected == 1 ? icons.formsDark : icons.formsLight} style={{ width: '100%' }} />
                    </Button>
                  </Box>
                  <Button
                  onClick={() => handleTabSelection(3)}
                    sx={{
                      position: 'absolute',
                      top: '328px',
                      width: '107px',
                      padding: 0,
                      minWidth: 'unset',
                    }}
                  >
                    <img alt="Contact" src={selected == 3 ? icons.contactDark : icons.contactLight} style={{ width: '100%' }} />
                  </Button>
                  <Button
                  onClick={() => handleTabSelection(0)}
                    sx={{
                      transform: 'translateX(-5%)',
                      position: 'absolute',
                      top: '195px',
                      width: '134px',
                      padding: 0,
                      minWidth: 'unset',
                    }}
                  >
                    <img alt="Profile" src={selected == 0 ? icons.profileDark : icons.profileLight} style={{ width: '100%' }} />
                  </Button>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, padding: '20px', zIndex:0 }}>
        <ProfileLanding />
      </Box>
    </Box>
  );
};