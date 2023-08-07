import React from 'react';
import Card from '@mui/material/Card';
import { CardContent, Typography, CardActionArea, CardMedia, Divider, Grid } from '@mui/material';
import { Vehicle } from '../../models/vehicle.model';

function CardVehicle({ name, year, price, photo }: Vehicle) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}> {/* Ajusta los valores de xs, sm, md, lg según tus necesidades */}
      <Card sx={{ maxWidth: 245, height: '100%' }}>
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
                $ {price}
              </Typography>
            </div>
          </CardContent>
          <CardMedia
            component="img"
            image={photo}
            alt={name}
            style={{ height: '110px' }}
            className="object-cover"
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CardVehicle;