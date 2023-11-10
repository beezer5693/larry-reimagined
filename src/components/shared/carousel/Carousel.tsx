"use client";

import { QUOTES } from "@/constants";
import AnimateElement from "../animation/AnimateElement";
import { useEffect } from "react";
import carouselImage from "../../../../public/assets/home/testimonial.jpeg";
import Image from "next/image";

const Carousel = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scoller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller: any) => {
        scroller.setAttribute("data-animated", true);
      });

      const scrollerInner = document.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner!.children);

      scrollerContent.forEach((item: any) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner!.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <section className="relative mb-28 w-full py-24 before:absolute before:inset-0 before:z-10 before:bg-gradient-to-b before:from-black/60 before:to-black/10 before:backdrop-blur-[4px] md:mb-36 xl:mb-52">
      <Image
        src={carouselImage}
        className="object-cover object-top"
        fill
        alt="Speaker talking to large crowd"
      />
      <div className="relative z-20 mx-auto w-full">
        <div className="mb-8 w-full px-5 md:px-10">
          <AnimateElement className="mx-auto max-w-[800px]" duration={1}>
            <h2 className="balance-text testimonial-section--title text-center font-bold text-white">
              See what others have to say about Larry.
            </h2>
          </AnimateElement>
        </div>
        <div className="scoller group mx-auto w-full py-10 data-[animated=true]:overflow-hidden">
          <ul className="scroller__inner flex max-w-max gap-4 group-data-[animated=true]:flex-nowrap">
            {QUOTES.map((quote, index) => (
              <li
                key={index}
                className="balance-text testimonial flex max-w-[400px] shrink-0 flex-col items-center gap-5 self-start rounded-md bg-black/60 p-10 shadow-2xl shadow-black/80 backdrop-blur-lg"
              >
                <div className="w-[100px]">
                  <Image
                    src={quote.imageSrc}
                    alt={`image of ${quote.author}`}
                    className="aspect-square rounded-full object-cover shadow-lg shadow-black/80"
                  />
                </div>
                <div className="text-center text-lg font-medium text-gray-100">
                  <div className="font-bold">{quote.author}</div>
                  <div className="text-sm text-gray-300">{quote.title}</div>
                </div>
                <div className="balance-text text-center text-xl italic text-gray-50">
                  <span>{`"`}</span>
                  {quote.text}
                  <span>{`"`}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
