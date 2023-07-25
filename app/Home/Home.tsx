import React from 'react';
import { Container, Typography } from '@mui/material';
import CardVehicle from './components/CardVehicle/CardVehicle';

function Home() {
  return (
    <div>
      <Container>
        <Typography variant="h4" mt={5} fontWeight="bold" >Descubrí todos los modelos</Typography>
      </Container>
      <CardVehicle />
    </div>
  )
}

export default Home