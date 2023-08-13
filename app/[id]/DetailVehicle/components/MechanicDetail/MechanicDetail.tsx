import React from "react";
import { CartDetail } from "../../models/cartDetail";
import Image from "next/image";
import { Container } from "@mui/material";

interface Props {
  data: CartDetail;
}

function MechanicDetail({ data }: Props) {
  // console.log(data)
  return (
    <Container>
      <div className="flex justify-evenly  my-20 flex-col-reverse md:flex-row">
        <div className="mt-5 md:ml-16 md:mt-16">
          <p className="text-lg font-semibold">{data.model_features[0].name}</p>
          <p className="text-sm">{data.model_features[0].description}</p>
        </div>
        <Image
          src={data.model_features[0].image}
          alt="Image mechanic"
          width={370}
          height={100}
          className="rounded-xl"
        />
      </div>
      <div className="flex justify-evenly  mb-10 flex-col md:flex-row ">
        <Image
          src={data.model_features[1].image}
          alt="Image mechanic"
          width={370}
          height={100}
          className="rounded-xl"
        />
        <div className="mt-5 md:mr-16 md:mt-16">
          <p className="text-lg font-semibold">{data.model_features[1].name}</p>
          <p className="text-sm">{data.model_features[1].description}</p>
        </div>
      </div>
    </Container>
  );
}

export default MechanicDetail;
