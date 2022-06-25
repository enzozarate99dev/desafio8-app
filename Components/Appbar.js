import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, width:"100%" }}>
      <AppBar position="fixed" sx={{backgroundColor:'#c0b283'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            enzo.me
          </Typography>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Pricing</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
