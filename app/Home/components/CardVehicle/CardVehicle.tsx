import React from 'react';
import Card from '@mui/material/Card';
import {CardContent, Typography, CardActionArea, CardMedia, Divider } from '@mui/material';
import { Vehicle } from './model/vehicle.model';

function CardVehicle ({name, year, price, photo}: Vehicle) {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='flex justify-center'>
            {name}
          </Typography>
          <div className='flex justify-around my-4'>
            <Typography variant="body2" color="text.secondary">
              {year}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body2" color="text.secondary">
              {price}
            </Typography>
          </div>
        </CardContent>
        <CardMedia
          component="img"
          image={photo}
          alt={name}
          className="object-cover"
        />
      </CardActionArea>
    </Card>
  );
}

export default CardVehicle