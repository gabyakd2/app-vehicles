import { Container } from "@mui/material";
import React from "react";
import SelectOrder from "./components/SelectOrder";
import { Button, Stack } from "@mui/material";
import { SetFilterProp } from "./model/setFilterProp";

function Filters({ setFilters }: SetFilterProp) {
  const handleChangeCategory = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      category: category,
    }));
  };

  return (
    <Container className="flex justify-between my-10">
      <p className="mt-3">Filtrar por</p>
      <Stack spacing={2} direction="row">
        <Button
          className="normal-case text-base"
          variant="text"
          onClick={() => handleChangeCategory("all")}
        >
          Todos
        </Button>
        <Button
          className="normal-case text-base"
          variant="text"
          onClick={() => handleChangeCategory("Sedan")}
        >
          Autos
        </Button>
        <Button
          className="normal-case text-base"
          variant="text"
          onClick={() => handleChangeCategory("Pickups y Comerciales")}
        >
          Pickups y Comerciales
        </Button>
        <Button
          className="normal-case text-base"
          variant="text"
          onClick={() => handleChangeCategory("SUVs")}
        >
          SUVs y Crossovers
        </Button>
      </Stack>
      <SelectOrder setFilters={setFilters}/>
    </Container>
  );
}

export default Filters;
