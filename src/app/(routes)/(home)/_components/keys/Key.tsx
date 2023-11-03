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
      <div className="relative h-[300px] overflow-hidden shadow-xl shadow-neutral-500/50 sm:h-[400px] md:h-[325px] lg:h-[450px]">
        <Image
          className={cn("object-cover object-top", data.style)}
          src={data.imageSrc}
          fill
          alt={data.title}
          quality={65}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-black/40 transition-colors duration-500 ease-in-out group-hover:bg-black/0"></div>
        <div className="absolute bottom-8 left-1/2 flex w-full -translate-x-1/2 flex-col items-center gap-1 px-5 lg:gap-2">
          <h3 className="text-center text-3xl font-semibold capitalize tracking-tighter md:text-4xl">
            {data.title}
          </h3>
          <p className="balance-text text-center font-medium lg:text-lg">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Key;
