"use client";

import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const TestimonialCarousel = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    author: string;
    title: string;
    imageSrc: StaticImageData;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-full overflow-hidden",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="balance-text flex max-w-[350px] shrink-0 flex-col items-center gap-6 self-start rounded-md border border-slate-400/50 bg-slate-700/20 p-7 backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-[100px]">
                <Image
                  src={item.imageSrc}
                  alt={`image of ${item.author}`}
                  className={cn(
                    "aspect-square rounded-full object-cover shadow-xl shadow-slate-900/80",
                    {
                      "brightness-125": idx === 4 || idx === 8,
                    },
                  )}
                  quality={65}
                />
              </div>
              <div className="text-center text-gray-100">
                <div className="text-lg font-bold">{item.author}</div>
                <div className="text-sm text-gray-300">{item.title}</div>
              </div>
            </div>
            <div className="balance-text text-center text-xl italic text-gray-50">
              <span>{`"`}</span>
              {item.quote}
              <span>{`"`}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
