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
    <AnimateElement x={50} duration={0.75} delay={id * 0.15}>
      <div
        key={data.title}
        className={cn("col-span-1 flex flex-col text-white md:col-span-1")}
      >
        <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-xl shadow-neutral-500/50 sm:h-[400px] md:h-[375px] lg:h-[350px]">
          <Image
            className={cn("object-cover object-center")}
            src={data.imageSrc}
            fill
            alt={data.title}
            quality={65}
            priority
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
