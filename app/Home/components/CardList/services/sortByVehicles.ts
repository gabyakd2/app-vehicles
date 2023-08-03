import { Vehicle } from "../../../models/vehicle.model";
import { FiltersState } from "@/app/Home/models/filterState.model";

export function sortByVehicles(vehicles: Vehicle[], filters: FiltersState): Vehicle[] {
    return vehicles.sort((vehicleA, vehicleB) => {
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
  }