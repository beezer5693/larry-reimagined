import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import AnimateElement from "@/components/shared/animation/AnimateElement";

type EBookProps = {
  ebook: {
    title: string;
    coverImage: StaticImageData;
    href: string;
    download: string;
  };
};

const EBook = ({ ebook }: EBookProps) => {
  return (
    <AnimateElement
      className="basis-[33.3333333%]"
      delay={0.75}
      duration={0.75}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="lg:h-[350px]">
          <Image
            src={ebook.coverImage}
            alt="Hiring E-book cover"
            className="h-full object-cover object-center"
            quality={65}
          />
        </div>
        <div className="max-w-[15ch] text-center text-xl font-medium">
          {ebook.title}
        </div>
        <Link href={ebook.href} target="_blank" download={ebook.download}>
          <Button className="mt-5">Download E-book</Button>
        </Link>
      </div>
    </AnimateElement>
  );
};

export default EBook;
