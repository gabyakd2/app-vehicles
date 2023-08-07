import Image from "next/image";
import React from "react";
import { CartDetail } from "../../models/cartDetail";

interface Props {
  data: CartDetail;
}

function TitleDetail({ data }: Props) {

  const cleanDescription = (description: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(description, "text/html");
    return doc.body.textContent || "";
  }
  console.log(data);
  // const {photo} = data;
  return (
    <div>
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
      <p>{data.name}</p>
      <p>{data.segment}</p>
      <p>{data.title}</p>
      <p>{cleanDescription(data.description)}</p>
    </div>
  );
}

export default TitleDetail;
