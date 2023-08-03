import React from "react";
import { Vehicle } from "../../models/vehicle.model";
import CardVehicle from "../CardVehicle/CardVehicle";
import { FiltersState } from "../../models/filterState.model";
import { filterByCategory } from "./services/filterByCategory";
import { sortByVehicles } from "./services/sortByVehicles";

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
  const filteredByCategory = filterByCategory(aux, filters);
  const filteredAndSorted = sortByVehicles(filteredByCategory, filters);

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
