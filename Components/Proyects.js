import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Herobutton from './Herobutton';
import  Title  from './Titles';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
const Proyects = () => (
    <>
        <Paper
            sx={{
                p: 2,
                padding: 3,
                margin: 'auto',
                marginBottom: 3,
                width: '90%',
                maxWidth: 1000,
                flexGrow: 1,
                backgroundColor: '#dcd0c0'
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 256, height: 256 }}>
                        <Img alt="complex" src="https://www.zdnet.com/a/img/resize/3ed46d9f91323c625b4eed38d226de644edf9b2d/2021/04/28/a66e0b27-652b-4578-a1c2-8ac8113a964c/sbux-rewards.png?width=1200&fit=bounds&format=pjpg&auto=webp" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Starbucks Mobile
                            </Typography>
                            
                            <Typography variant="body2" color="text.secondary">
                                Actualization in 2022
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Herobutton sx={{ cursor: 'pointer' }} name="Visit">
                                
                            </Herobutton>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Paper>
        <Paper
            sx={{
                p: 2,
                padding: 3,
                margin: 'auto',
                marginBottom: 3,
                maxWidth: 1000,
                width: '90%',
                flexGrow: 1,
                backgroundColor: '#dcd0c0'
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 256, height: 256 }}>
                        <Img alt="complex" src="https://ecommerce-platforms.com/wp-content/uploads/2015/04/asos_opt-compressor.png" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Asos
                            </Typography>
                            
                            <Typography variant="body2" color="text.secondary">
                                 2021
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Herobutton sx={{ cursor: 'pointer' }} name="Visit">
                                
                            </Herobutton>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Paper>
        <Paper
            sx={{
                p: 2,
                padding: 3,
                margin: 'auto',
                marginBottom: 3,
                width: '90%',
                maxWidth: 1000,
                flexGrow: 1,
                backgroundColor: '#dcd0c0'
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 256, height: 256 }}>
                        <Img alt="complex" src="https://cdn.dribbble.com/users/1728196/screenshots/15038675/media/5709ebacba012f549bb09e61dc34a6a5.png?compress=1&resize=400x300&vertical=top" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Figos Resto
                            </Typography>
                            
                            <Typography variant="body2" color="text.secondary">
                                 2022
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Herobutton sx={{ cursor: 'pointer' }} name="Visit">
                                
                            </Herobutton>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Paper>
        
    </>

)
export default Proyects;