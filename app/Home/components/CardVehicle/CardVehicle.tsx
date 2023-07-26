import React from 'react';
import Card from '@mui/material/Card';
import {CardContent, Typography, CardActionArea } from '@mui/material';
import { Vehicle } from './model/vehicle.model';

function CardVehicle ({name, year, price, photo}: Vehicle) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardVehicle