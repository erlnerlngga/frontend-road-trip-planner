"use client";

import { ImageType } from "@/utils/types";
import Image from "next/image";

interface PropTypes {
  list_image: ImageType[];
}

export default function ImageSlide({ list_image }: PropTypes) {
  return (
    <div>
      <div className="grid grid-cols-1  justify-items-center gap-y-16">
        {list_image.map((val, index) => {
          return (
            <div
              key={index}
              className="relative h-[200px] lg:h-[450px] w-[300px] sm:w-[450px] sm:h-[300px] lg:w-full xl:w-2/3 xl:h-[550px] object-cover"
            >
              <Image
                fill
                src={val.image_url}
                alt="detail image"
                sizes="100vw"
                className="rounded-lg shadow-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
