import React from "react";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { SetFilterProp } from "../models/setFilterProp";

function FilterMobile({ setFilters }: SetFilterProp) {
  const handleChangeCategory = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      category: category,
    }));
  };
  return (
    <FormControl>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Filtrar por
      </InputLabel>
      <NativeSelect onChange={(e) => handleChangeCategory(e.target.value)}>
        <option value="all">Todos</option>
        <option value="Sedan">Autos</option>
        <option value="Pickups y Comerciales">Pickups y Comerciales</option>
        <option value="SUVs">SUVs y Crossovers</option>
      </NativeSelect>
    </FormControl>
  );
}

export default FilterMobile;
