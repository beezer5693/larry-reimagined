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
    <AnimateElement className="place-self-stretch" delay={0.75} duration={0.75}>
      <div className="flex h-full flex-col items-center justify-center  pb-14">
        <Image
          src={ebook.coverImage}
          alt={`${ebook.title} book cover`}
          className="h-full object-cover object-center"
          quality={65}
        />
        <div className="max-w-[15ch] text-center text-xl font-medium">
          {ebook.title}
        </div>
        <Link href={ebook.href} target="_blank">
          <Button variant={"dark"} className="mt-5 hover:opacity-90">
            Download E-book
          </Button>
        </Link>
      </div>
    </AnimateElement>
  );
};

export default EBook;
