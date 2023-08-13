import Image from "next/image";
import React from "react";
import { CartDetail } from "../../models/cartDetail";
import { Container } from "@mui/material";
import { cleanText } from "../../services/cleanText";

interface Props {
  data: CartDetail;
}

function TitleDetail({ data }: Props) {
  // console.log(data);
  // const {photo} = data;
  return (
    <Container>
      <div className="flex flex-col md:flex-row">
        <Image
          src={data.photo}
          width={100}
          height={100}
          objectFit="cover"
          className="rounded-lg"
          layout="responsive"
          objectPosition="center"
          placeholder="blur"
          blurDataURL={data.photo}
          unoptimized
          priority
          alt="Image Vehicle"
        />
        <div className="flex flex-col justify-center md:ms-8 md:m-0">
          <p className="text-2xl font-semibold mb-4">
            {data.name} {data.segment}
          </p>
          <p className="text-4xl font-bold mb-4">{data.title}</p>
          <p className="text-xl">{cleanText(data.description)}</p>
        </div>
      </div>
    </Container>
  );
}

export default TitleDetail;
