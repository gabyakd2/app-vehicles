import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import SelectOrder from "./components/SelectOrder";
import { Button, Stack, FormControl, InputLabel, NativeSelect } from "@mui/material";
import { SetFilterProp } from "./model/setFilterProp";

function Filters({ setFilters }: SetFilterProp) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
  };

  const handleChangeCategory = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      category: category,
    }));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container className="flex justify-between my-10">
      {/* <p className="mt-3">Filtrar por</p> */}
      {isMobile ? (
        <FormControl>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Ordenar por
        </InputLabel>
        <NativeSelect>
          <option>Todos</option>
          <option>Autos</option>
          <option>Pickups y Comerciales</option>
          <option>SUVs y Crossovers</option>
        </NativeSelect>
        </FormControl>
      ):
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
    }
      <SelectOrder setFilters={setFilters} />
    </Container>
  );
}

export default Filters;
