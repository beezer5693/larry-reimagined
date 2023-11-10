"use client";

import { QUOTES } from "@/constants";
import AnimateElement from "../animation/AnimateElement";
import { useEffect } from "react";
import carouselImage from "../../../../public/assets/home/testimonial.jpeg";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
    <section className="relative mb-28 w-full overflow-hidden pt-24 before:absolute before:-bottom-10 before:-left-10 before:-right-10 before:-top-10 before:z-10 before:bg-gradient-to-b before:from-black/80 before:from-50% before:to-black/70 md:mb-36 xl:mb-52">
      <Image
        src={carouselImage}
        className="object-cover object-top"
        fill
        alt="Speaker talking to large crowd"
        sizes="100vw"
        quality={65}
      />
      <div className="relative z-10 mx-auto w-full">
        <div className="mb-16 w-full px-5 md:px-10">
          <AnimateElement className="mx-auto mb-5 max-w-[900px]" duration={1}>
            <h2 className="balance-text text-center font-bold text-white">
              Contributions and Influence
            </h2>
          </AnimateElement>
          <AnimateElement duration={1} delay={0.2}>
            <p className="sub-heading balance-text text-center font-medium text-gray-50">
              See what {`Larry's`} closest friends and colleagues have to say
              about him.
            </p>
          </AnimateElement>
        </div>
        <div className="scoller group mx-auto w-full pb-36 data-[animated=true]:overflow-hidden">
          <ul className="scroller__inner flex max-w-max flex-wrap justify-center gap-4 group-data-[animated=true]:flex-nowrap">
            {QUOTES.map((quote, index) => (
              <li
                key={index}
                className="balance-text testimonial flex max-w-[375px] shrink-0 flex-col items-center gap-6 self-start rounded-md bg-slate-700/20 p-7 shadow-2xl shadow-black/80 backdrop-blur-md"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-[100px]">
                    <Image
                      src={quote.imageSrc}
                      alt={`image of ${quote.author}`}
                      className={cn(
                        "aspect-square rounded-full object-cover shadow-xl shadow-slate-900/80",
                        {
                          "brightness-125": index === 4 || index === 8,
                        },
                      )}
                      quality={65}
                    />
                  </div>
                  <div className="text-center text-gray-100">
                    <div className="text-lg font-bold">{quote.author}</div>
                    <div className="text-sm text-gray-300">{quote.title}</div>
                  </div>
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
