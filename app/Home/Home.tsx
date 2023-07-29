import React from 'react';
import { Container, Typography } from '@mui/material';
import CardVehicle from './components/CardVehicle/CardVehicle';
import CardList from './components/CardList/CardList';
import Filters from './components/Filters/Filters';

function Home() {
  return (
    <div>
      <Container>
        <Typography variant="h4" mt={5} fontWeight="bold" >Descubrí todos los modelos</Typography>
      </Container>
      <Filters />
      <CardList />
    </div>
  )
}

export default Home