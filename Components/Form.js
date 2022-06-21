import  React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Form=()=>(
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="filled-basic" label="Email" variant="filled" />
          <TextField id="filled-basic" label="Plan" variant="filled" />
          <TextField
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue=""
          variant="standard"
        />

        </Box>
)

export default Form;