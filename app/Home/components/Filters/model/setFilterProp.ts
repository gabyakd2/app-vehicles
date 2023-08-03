import { FiltersState } from "@/app/Home/models/filterState.model";

export interface SetFilterProp {
    setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
}