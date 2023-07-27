import React from "react";
import { useQuery } from "react-query";
import { Vehicle } from "../CardVehicle/model/vehicle.model";
import CardVehicle from "../CardVehicle/CardVehicle";
import { getVehicles } from "./services/getVehicles";

function CardList() {

  const { data, status } = useQuery("vehicle", getVehicles);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div>
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
  );
}

export default CardList;
