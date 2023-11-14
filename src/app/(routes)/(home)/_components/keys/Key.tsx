"use client";

import AnimateElement from "@/components/shared/animation/AnimateElement";
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
    <AnimateElement
      className={cn("col-span-1 md:col-span-2")}
      x={20}
      duration={1}
      delay={id * 0.15}
    >
      <div key={data.title} className={cn("flex flex-col text-white")}>
        <div className="relative h-[300px] overflow-hidden rounded-md shadow-2xl shadow-neutral-800/80 sm:h-[400px] md:h-[375px] lg:h-[350px]">
          <Image
            className={cn("object-cover object-center")}
            src={data.imageSrc}
            fill
            alt={data.title}
            quality={65}
            priority
            sizes="(min-width: 1700px) 291px, (min-width: 1040px) calc(17.97vw - 11px), (min-width: 780px) 700px, calc(95.65vw - 27px)"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 transition-colors duration-500 ease-in-out group-hover:bg-black/0"></div>
          <div className="absolute bottom-8 left-1/2 flex w-full -translate-x-1/2 flex-col gap-1 px-3 lg:gap-2">
            <h4 className="text-center font-semibold capitalize tracking-tight">
              {data.title}
            </h4>
            <p className="balance-text text-center font-medium lg:text-lg">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </AnimateElement>
  );
};
export default Key;
