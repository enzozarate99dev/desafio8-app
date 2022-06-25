import React from 'react';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Mifooter = () => (
    <Grid container 
    sx={{
        padding: 10,
        backgroundColor: '#c0b283', 
        display:'flex',
        justifyContent: "center",
        gap: 8
        }}>
        <FacebookIcon fontSize="large"></FacebookIcon>
        <InstagramIcon fontSize="large"></InstagramIcon>
        <GitHubIcon fontSize="large"></GitHubIcon>
        <LinkedInIcon fontSize="large"></LinkedInIcon>
    </Grid>
)
export default Mifooter