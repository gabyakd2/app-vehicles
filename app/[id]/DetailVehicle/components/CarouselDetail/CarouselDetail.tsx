import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "better-react-carousel";
import { CartDetail } from "../../models/cartDetail";
import Image from "next/image";
import { cleanText } from "../../services/cleanText";

interface Props {
  data: CartDetail;
}

function CarouselDetail({ data }: Props) {
  return (
    <div className="flex justify-center items-center bg-gray-200 py-6 mt-16 md:mt-0">
      <Carousel
        rows={1}
        cols={data.model_highlights.length}
        gap={6}
        showDots
        dotColorActive="#a1a1a1"
        dotColorInactive="#dedede"
        responsiveLayout={[
          {
            breakpoint: 768,
            cols: 1,
            rows: 1,
            gap: 2,
            loop: true,
          },
        ]}
      >
        {data &&
          data.model_highlights.map((item) => (
            <Carousel.Item key={item.title}>
              <Image
                src={item.image}
                width={350}
                height={100}
                alt="Image mechanic"
                className="rounded-xl mx-4"
              />
              <p className="md:w-80 ml-7 my-5 font-semibold">{item.title}</p>
              <p className="md:w-80 ml-7 text-sm">{cleanText(item.content)}</p>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}

export default CarouselDetail;
