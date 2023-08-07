import React from "react";
import { useQuery } from "react-query";
import { getDetailCart } from "./services/getDetailCart";
import { CartDetail } from "./models/cartDetail";
import TitleDetail from "./components/TitleDetail/TitleDetail";
import { usePathname } from 'next/navigation'
import MechanicDetail from "./components/MechanicDetail/MechanicDetail";

function DetailVehicle() {
  const pathName = usePathname();
  const idPath = pathName.split("/")[1];
  const id = parseInt(idPath)
  const { data, status } = useQuery<CartDetail, Error>("detailCart", () =>
    getDetailCart(id)
  );
  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error</span>;
  }
// console.log(data)
  return (
  <div>
    {data && <TitleDetail data={data} />}
    {data && <MechanicDetail data={data} />}
    
  </div>
  );
}

export default DetailVehicle;
