import React from 'react';
import Typography from '@mui/material/Typography';

const Title = (props) => (

    <Typography gutterBottom component="div" sx={{fontFamily:'lobster', fontWeight:1000, fontSize:'30px'}}>
        {props.name}
    </Typography>
)
export default Title;