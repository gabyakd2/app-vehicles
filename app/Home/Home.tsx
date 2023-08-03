import React, { useState } from "react";
import { useQuery } from "react-query";
import { Container, Typography } from "@mui/material";
import { getVehicles } from "../Home/services/getVehicles";
import { FiltersState } from "./model/filterState.model";
import CardList from "./components/CardList/CardList";
import Filters from "./components/Filters/Filters";

function Home() {
  const { data, status } = useQuery("vehicle", getVehicles);

  const [filters, setFilters] = useState<FiltersState>({
    category: "all",
    orderBy: 0,
  });

  return (
    <div>
      <Container>
        <Typography variant="h4" mt={5} fontWeight="bold">
          Descubrí todos los modelos
        </Typography>
      </Container>
      <Filters setFilters={setFilters} />
      <CardList data={data} filters={filters} status={status} />
    </div>
  );
}

export default Home;
