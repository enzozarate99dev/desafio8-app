import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Herobutton = (props) => {
    return (
        <>
        <Stack spacing={2} direction="row">
      
      <Button variant="contained" sx={{backgroundColor:"#c0b283", color:"white"}}>{props.name}</Button>
      
    </Stack>
        </>
    );
};

export default Herobutton;