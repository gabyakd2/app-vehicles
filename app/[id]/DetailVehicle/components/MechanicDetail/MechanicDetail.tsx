import React from "react";
import { CartDetail } from "../../models/cartDetail";
import Image from "next/image";

interface Props {
  data: CartDetail;
}

function MechanicDetail({ data }: Props) {
  return (
    <div>
      <div>
        {data.model_features.map((feature) => (
          <div>
            <p>{feature.name}</p>
            {/* <Image src={feature.image} width={100} height={100} alt="img" /> */}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default MechanicDetail;
