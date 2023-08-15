import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import SelectOrder from "./components/SelectOrder";
import {
  Button,
  Stack,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import { SetFilterProp } from "./models/setFilterProp";
import FilterMobile from "./components/FilterMobile";
import FilterDesktop from "./components/FilterDesktop";

function Filters({ setFilters }: SetFilterProp) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
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
      {isMobile ? (
        <FilterMobile setFilters={setFilters} />
      ) : (
        <FilterDesktop setFilters={setFilters} />
      )}
      <SelectOrder setFilters={setFilters} />
    </Container>
  );
}

export default Filters;
