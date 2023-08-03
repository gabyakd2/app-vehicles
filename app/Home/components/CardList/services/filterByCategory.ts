import { Vehicle } from "../../../models/vehicle.model";
import { FiltersState } from "@/app/Home/models/filterState.model";

export function filterByCategory(vehicles: Vehicle[], filters: FiltersState): Vehicle[] {
    if (filters.category === "all") {
      return vehicles;
    }
  
    return vehicles.filter((vehicle) => vehicle.segment === filters.category);
  }