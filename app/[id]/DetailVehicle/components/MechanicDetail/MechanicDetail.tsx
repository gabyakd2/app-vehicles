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
      <div className="flex justify-evenly items-center my-20 flex-col md:flex-row">
        <div className="md:ml-20">
          <p className="text-xl font-semibold">{data.model_features[0].name}</p>
          <p>{data.model_features[0].description}</p>
        </div>
        <Image
          src={data.model_features[0].image}
          alt="Image mechanic"
          width={370}
          height={100}
          className="rounded-xl"
        />
      </div>
      <div className="flex justify-evenly items-center mb-2 flex-col-reverse md:flex-row">
        <Image
          src={data.model_features[1].image}
          alt="Image mechanic"
          width={370}
          height={100}
          className="rounded-xl"
        />
        <div className="md:mr-20">
          <p className="text-xl font-semibold">{data.model_features[1].name}</p>
          <p>{data.model_features[1].description}</p>
        </div>
      </div>
    </div>
  );
}

export default MechanicDetail;
