import React from "react";
import { useQuery } from "react-query";
import { Vehicle } from "../CardVehicle/model/vehicle.model";
import CardVehicle from "../CardVehicle/CardVehicle";
import { getVehicles } from "./services/getVehicles";
import { Container } from "@mui/material";

function CardList() {
  const { data, status } = useQuery("vehicle", getVehicles);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div className="flex justify-center my-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
        {data.length &&
          data.map((vehicle: Vehicle) => (
            <CardVehicle
              id={vehicle.id}
              key={vehicle.id}
              name={vehicle.name}
              photo={vehicle.photo}
              year={vehicle.year}
              price={vehicle.price}
            />
          ))}
      </div>
    </div>
  );
}

export default CardList;
