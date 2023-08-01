import React from "react";
import { Vehicle } from "../CardVehicle/model/vehicle.model";
import CardVehicle from "../CardVehicle/CardVehicle";
import { FiltersState } from "../../Home";

interface Props {
  data: Vehicle[];
  filters: FiltersState
}

function CardList({data, filters}: Props) {
  const aux = data
// console.log(aux)
  const filterVehicles = aux?.filter((vehicle) => (
    (filters.category === "all" || vehicle.segment === filters.category) &&
    (filters.orderBy === 0 || vehicle.price >= filters.orderBy)
  ));

// console.log(filterVehicles)
  return (
    <div className="flex justify-center my-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
        {filterVehicles?.length &&
          filterVehicles.map((vehicle: Vehicle) => (
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
