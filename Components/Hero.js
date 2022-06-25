import React from 'react';
import Herobutton from '../Components/HeroButton'
import { Container, Box, Typography, Grid, Paper, Button } from '@mui/material';

const Hero = () => {
    return (
        <Paper elevation={3}     
        sx={{
            backgroundImage: "url('escritorio.jpg')",
            paddingTop: 12,
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
    >
  

        <Container maxWidth="md" sx={{ height: "100%" }}>
            <Grid container justifyContent="center" alignItems="center"
                sx={{ height: "100%" }}>
                <Grid item>
                    <Typography fontFamily='Dawning of a New Day' fontSize="60px" color="#fff" component="div"
                        fontWeight="700" variant="h3"
                        sx={{
                            
                            textShadow: "0px 1px 3px #333",
                            textAlign: "center",
                            justifyContent: "center"
                        }}
                    >
                        DESIGN &
                        WEB APP DEVELOPMENT
                    </Typography>
                    
                </Grid>
                <Grid item>
                <Herobutton name="Get Started">
                        
                        </Herobutton>
                </Grid>
            </Grid>
        </Container>
    </Paper>
            )
}

            export default Hero