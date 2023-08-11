import React from "react";
import { CartDetail } from "../../models/cartDetail";
import Image from "next/image";

interface Props {
  data: CartDetail;
}

function MechanicDetail({ data }: Props) {
  // console.log(data)
  return (
    <div>
      <div>
        <Image
          src={data.model_features[0].image}
          alt="Image mechanic"
          width={270}
          height={100}
        />
      </div>
      <div>
        <Image
          src={data.model_features[1].image}
          alt="Image mechanic"
          width={270}
          height={100}
        />
      </div>
    </div>
  );
}

export default MechanicDetail;
