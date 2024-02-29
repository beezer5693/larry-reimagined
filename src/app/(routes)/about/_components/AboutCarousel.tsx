"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { aboutImageCourasel } from "@/constants";
import { cn } from "@/lib/utils";

const AboutCarousel = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scoller-about");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller: any) => {
        scroller.setAttribute("data-animated", true);
      });

      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller__inner__about");
        const scrollerContent = Array.from(scrollerInner!.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner!.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden pt-32 sm:pt-0">
      <div className="relative z-10 mx-auto w-full">
        <div className="scoller-about group mx-auto w-full pb-36 data-[animated=true]:overflow-hidden">
          <ul className="scroller__inner__about flex flex-wrap justify-center gap-4 group-data-[animated=true]:flex-nowrap">
            {aboutImageCourasel.map((img, index) => (
              <li
                key={index}
                className="relative h-[450px] w-[450px] shrink-0 rounded-md shadow-2xl shadow-black/40"
              >
                <Image
                  src={img.src}
                  alt={"Larry Bryan"}
                  fill={true}
                  quality={65}
                  className={cn("rounded-md object-cover", img.position)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutCarousel;
