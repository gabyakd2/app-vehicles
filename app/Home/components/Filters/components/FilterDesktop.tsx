import React from "react";
import { Button, Stack } from "@mui/material";
import { SetFilterProp } from "../models/setFilterProp";

function FilterDesktop({ setFilters }: SetFilterProp) {
  const handleChangeCategory = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      category: category,
    }));
  };
  return (
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
  );
}

export default FilterDesktop;
