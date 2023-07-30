import React, { useState } from 'react';
import { useQuery } from "react-query";
import { Container, Typography } from '@mui/material';
import CardList from './components/CardList/CardList';
import Filters from './components/Filters/Filters';
import { getVehicles } from "../Home/components/CardList/services/getVehicles";

export interface FiltersState {
  category: string;
  orderBy: string;
}

function Home() {
  const { data, status } = useQuery("vehicle", getVehicles);
  const [filters, setFilters] = useState<FiltersState>({
    category: 'all',
    orderBy: "all"
  });
  return (
    <div>
      <Container>
        <Typography variant="h4" mt={5} fontWeight="bold" >Descubrí todos los modelos</Typography>
      </Container>
      <Filters setFilters={setFilters}/>
      <CardList />
    </div>
  )
}

export default Home