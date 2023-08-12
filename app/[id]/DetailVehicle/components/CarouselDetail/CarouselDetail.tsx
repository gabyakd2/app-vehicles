import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "better-react-carousel";
import { CartDetail } from "../../models/cartDetail";
import Image from "next/image";

interface Props {
  data: CartDetail;
}

function CarouselDetail({ data }: Props) {
  return (
    <Carousel
      rows={1}
      cols={data.model_highlights.length}
      gap={4}
      showDots={true}
      dotColorActive="#a1a1a1"
      dotColorInactive="#dedede"
      responsiveLayout={[{
        breakpoint: 768,
        cols: 1,
        rows: 1,
        gap: 2,
        loop: true,
        showDots: true,
      }]}
    >
      {data &&
        data.model_highlights.map((item, index) => (
          <Carousel.Item>
            <Image
              src={item.image}
              width={350}
              height={100}
              alt="Image mechanic"
            />
          </Carousel.Item>
        ))}
      {/* <Carousel.Item>
        <Image
          src={data.model_highlights[0].image}
          width={150}
          height={100}
          alt="Image mechanic"
        />
        <Image
          src={data.model_highlights[1].image}
          width={150}
          height={100}
          alt="Image mechanic"
        />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default CarouselDetail;
