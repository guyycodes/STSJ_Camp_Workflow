import React, { useEffect, useState } from 'react';
import { CircularProgress, Box, Typography, Button, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// this is the page Google OAuth redirects to, then we redirect the user from here
export const ProfileRedirect =()=> {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [STJDA_No_User, setSTJDA_No_User] = useState(false)

    useEffect(() => {
        // Setting a timer for the spinner before redirecting
        let timer
        if (document.cookie.split(';').some((item) => item.trim().startsWith('STJDA_No_User'))) {
            setSTJDA_No_User(true)
        }else{
            timer = setTimeout(() => {
                setLoading(false);
            }, 10500);
            fetchData();
        }
        return () => clearTimeout(timer);  // Cleanup the timer on component unmount
    }, [navigate]);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/auth/credentials", {
            method: "GET",
            credentials: 'include'  // this is sending the cookies to the backend for authentication
            })
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.text();
            // console.log("data: ", data);
            if (data){
                // Remove anything in local storage called 'STJDA'
                localStorage.removeItem('STJDA');
                
                localStorage.setItem("STJDA", data);
            } else {
                console.error("No token found in the response");
            }
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };
if(STJDA_No_User){
    return(
        <Container component="main" maxWidth="sm" sx={{
            backgroundImage: 'url("https://u-static.fotor.com/images/text-to-image/result/PRO-0fe755d158e34321a14f8f231abd8368.jpg")',
            backgroundSize: 'cover',  
            backgroundRepeat: 'no-repeat',  
            backgroundPosition: 'center',  
            height: '100vh',  
            display: 'flex',
            alignItems: 'center',  
            justifyContent: 'center',
            borderRadius: '1rem'
          }}>
        <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <Box style={{ textAlign: 'center' }}>  {/* Centering the text and progress circle */}
            <Typography variant="h6" gutterBottom>
                It looks like you don't have an account using those credentials...
            </Typography>
        </Box>
        <Box style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', width: '100%' }}>  {/* Button row */}
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => {
                    navigate('/')
                    if (document.cookie.split(';').some((item) => item.trim().startsWith('STJDA_No_User'))) {
                        document.cookie = "STJDA_No_User=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                        setSTJDA_No_User(false)
                    }
                }}
                sx={{ margin: 1, fontSize: '1rem' }} 
            >
                Go to Home
            </Button>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => {
                    navigate('/login')
                    if (document.cookie.split(';').some((item) => item.trim().startsWith('STJDA_No_User'))) {
                        document.cookie = "STJDA_No_User=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                        setSTJDA_No_User(false)
                    }
                }} 
                sx={{ margin: 1, fontSize: '1rem' }}  
            >
                Create an account
            </Button>  
        </Box>
    </Paper>
    </Box>
    </Container>
    )
}
if (loading) {
    return (
        <>
            <style>
            {`
                @keyframes gradient {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
                }
            `}
            </style>
            <Box
            m={2}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                backgroundSize: '400% 400%',
                animation: 'gradient 15s ease infinite'
            }}
            >
            <Typography>Redirecting to your profile...</Typography>
            <CircularProgress />
            </Box>
        </>
        );
    }else{

        navigate('/profile/authenticated');  // This redirects to the authenticated route after 10.5 seconds
        // navigate('/login')
    }
    
};