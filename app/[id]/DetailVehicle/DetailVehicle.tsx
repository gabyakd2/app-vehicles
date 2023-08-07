import React from "react";
import { useQuery } from "react-query";
import { getDetailCart } from "./services/getDetailCart";
import { CartDetail } from "./models/cartDetail";
import TitleDetail from "./components/TitleDetail/TitleDetail";
import { usePathname } from 'next/navigation'

function DetailVehicle() {
  const pathName = usePathname();
  const idPath = pathName.split("/")[1];
  const id = parseInt(idPath)
  const { data, status } = useQuery<CartDetail, Error>("detailCart", () =>
    getDetailCart(id)
  );

  return (
  <div>
    <TitleDetail />
  </div>
  );
}

export default DetailVehicle;
