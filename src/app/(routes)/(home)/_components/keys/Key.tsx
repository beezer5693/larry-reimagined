"use client";

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type KeyProps = {
  data: {
    title: string;
    description: string;
    imageSrc: StaticImageData;
    style: string;
  };
  id: number;
};

const Key = ({ data, id }: KeyProps) => {
  return (
    <div
      key={data.title}
      className={cn("col-span-1 flex flex-col text-white md:col-span-2", {
        "md:col-span-3": id < 2,
      })}
    >
      <div className="relative h-[300px] overflow-hidden shadow-2xl shadow-neutral-600/50 sm:h-[400px] md:h-[325px] lg:h-[450px]">
        <Image
          className={cn("object-cover object-top", data.style)}
          src={data.imageSrc}
          fill
          alt={data.title}
          quality={65}
          sizes={
            id < 2
              ? "(min-width: 1440px) 630px, (min-width: 780px) 45.31vw, calc(100vw - 56px)"
              : "(min-width: 1440px) 413px, (min-width: 780px) calc(30.16vw - 15px), calc(100vw - 56px)"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black/50 transition-colors duration-500 ease-in-out group-hover:bg-black/0"></div>
        <div className="absolute bottom-0 left-0 right-0 space-y-3 p-5">
          <h3 className="text-3xl font-semibold capitalize tracking-tighter md:text-xl lg:text-2xl">
            {data.title}
          </h3>
          <p className="font-medium">{data.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Key;
