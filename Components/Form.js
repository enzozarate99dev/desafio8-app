import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Title from './Titles'
const Form = () => (
  <Grid container sx={{ 
    display: 'flex', 
    justifyContent: "center", 
    flexDirection:'column', 
    alignItems:'center',
    backgroundColor: '#c0b283',
    padding: 5
    }}>

      <Title name = "CONTACT ME"></Title>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '30ch' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Email" variant="filled" />
      <TextField id="filled-basic" label="Plan" variant="filled" />
      <Grid item > 
      <TextField
        fullWidth
        id="standard-basic"
        label="Message"
        multiline
        rows={4}
        defaultValue=""
        variant="filled"
      />
      </Grid>

    </Box>
  </Grid>
)

export default Form;