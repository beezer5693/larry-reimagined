"use client";

import { QUOTES } from "@/constants";
import Image from "next/image";
import { useEffect } from "react";
import carouselImage from "../../../../../public/assets/home/testimonial.jpeg";
import AnimateElement from "../../../../components/shared/animation/AnimateElement";
import { TestimonialCarousel } from "./TestimonialCarousel";

const TestimonialSection = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scoller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller: any) => {
        scroller.setAttribute("data-animated", true);
      });

      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller__inner");
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
    <section className="relative mb-28 w-full overflow-hidden pt-24 before:absolute before:-bottom-10 before:-left-10 before:-right-10 before:-top-10 before:z-10 before:bg-gradient-to-b before:from-black/70 before:from-30% before:to-black/50 before:backdrop-blur-[2px] md:mb-36 xl:mb-52">
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
        <TestimonialCarousel items={QUOTES} speed="slow" />
      </div>
    </section>
  );
};

export default TestimonialSection;
