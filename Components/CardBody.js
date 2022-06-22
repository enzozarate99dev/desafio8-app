import React from "react";
import {Grid,Typography,Card,CardMedia,CardContent,CardActions,Button} 
from '@mui/material';


const CardBody = ({titulo,ruta}) =>{

    return (
        <>
            <Grid item xs={12} md={4}>
                <Card sx={{
                    maxWidth: 345, 
                    boxShadow: "0px 3px 6px #ddd",
                    width: "90%", 
                    margin: "0 auto"
                }}>
                    <CardMedia component="img" object-fit height="200"
                        image={ruta} sx={{objectFit:"fill"}} />
                    <CardContent>
                        <Typography color="#757575" gutterBottom variant="h5" component="div">
                            {titulo}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sunt corporis quod.
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <Button size="medium" variant="contained" color="primary"
                            sx={{ marginLeft: "8px" }}>
                            Ver Mas
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
           </>
     
    )
}

export default CardBody;