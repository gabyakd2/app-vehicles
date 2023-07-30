import { Container } from "@mui/material";
import React from "react";
import SelectOrder from "./components/SelectOrder";
import { Button, Stack } from "@mui/material";
import { FiltersState } from "../../Home";

interface Props {
    setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
}

function Filters({setFilters}: Props) {

  const handleChangeSegment = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFilters((prev) => ({
      ...prev,
      segment: 'todos',
    }));
  }

  return (
    <Container className="flex justify-between my-10">
        <p className="mt-3">Filtrar por</p>
      <Stack spacing={2} direction="row">
        <Button className="normal-case text-base" variant="text" onClick={handleChangeSegment} >Todos</Button>
        <Button className="normal-case text-base" variant="text">Autos</Button>
        <Button className="normal-case text-base" variant="text">Pickups y Comerciales</Button>
        <Button className="normal-case text-base" variant="text">SUVs y Crossovers</Button>
      </Stack>
        <SelectOrder />
    </Container>
  );
}

export default Filters;
