import React from 'react';
import Card from '@mui/material/Card';
import {CardContent, Typography, CardActionArea, CardMedia, Divider } from '@mui/material';
import { Vehicle } from './model/vehicle.model';

function CardVehicle ({name, year, price, photo}: Vehicle) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='flex justify-center'>
            Lizard
          </Typography>
          <div className='flex justify-around my-4'>
            <Typography variant="body2" color="text.secondary">
              Año
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body2" color="text.secondary">
              Precio
            </Typography>
          </div>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={photo}
          alt={name}
        />
      </CardActionArea>
    </Card>
  );
}

export default CardVehicle