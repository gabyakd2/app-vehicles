import React from "react";
import { Vehicle } from "../CardVehicle/model/vehicle.model";
import CardVehicle from "../CardVehicle/CardVehicle";
import { FiltersState } from "../../model/filterState.model";

interface Props {
  data: Vehicle[];
  filters: FiltersState;
  status: string;
}

function CardList({ data, filters, status }: Props) {
  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error</span>;
  }
  const aux = data;
  const filteredByCategory =
    filters.category === "all"
      ? aux
      : aux.filter((vehicle) => vehicle.segment === filters.category);

  const filteredAndSorted = filteredByCategory?.sort((vehicleA, vehicleB) => {
    if (filters.orderBy === 0) {
      // Sin ordenamiento
      return 0;
    } else if (filters.orderBy === 1) {
      // Ordenar por precio de menor a mayor
      return vehicleA.price - vehicleB.price;
    } else if (filters.orderBy === 2) {
      // Ordenar por precio de mayor a menor
      return vehicleB.price - vehicleA.price;
    } else if (filters.orderBy === 3) {
      // Ordenar por año de lanzamiento de menor a mayor
      return vehicleA.year - vehicleB.year;
    } else if (filters.orderBy === 4) {
      // Ordenar por año de lanzamiento de mayor a menor
      return vehicleB.year - vehicleA.year;
    }
    // En caso de que filters.orderBy no coincida con ninguno de los valores anteriores
    return 0;
  });

  return (
    <div className="flex justify-center my-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
        {filteredAndSorted?.length &&
          filteredAndSorted.map((vehicle: Vehicle) => (
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
