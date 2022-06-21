import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent className="card">
         <h5>{props.title}</h5>
         <p>{props.description}</p>
         <style jsx>
          {`
            .card{
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          `}
         </style>
        </CardContent>
      </CardActionArea>
    </Card>
   
  );
}
