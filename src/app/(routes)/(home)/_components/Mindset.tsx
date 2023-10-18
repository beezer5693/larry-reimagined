import Image from "next/image";
import mindset from "../../../../../public/assets/home/mindset.jpg";
import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Mindset = () => {
  return (
    <section className="flex w-full justify-center bg-black px-5 py-20 md:px-10">
      <div className="relative flex h-[700px] w-full max-w-screen-xl flex-col items-center border-b-8 border-l-8 border-[#3a53f5] md:h-[800px] lg:h-[550px] lg:flex-row lg:border-l-0 lg:border-r-8">
        <div className="relative flex flex-1 flex-col items-center justify-center self-stretch bg-black px-5 md:p-10 lg:w-1/2 lg:px-20">
          <div className="space-y-5">
            <h2 className="text-5xl font-bold tracking-tighter text-white md:text-6xl md:leading-[55px]">
              Your Mindset Matters
            </h2>
            <p className="max-w-[60ch] text-white lg:max-w-[40ch]">
              Every day, 95% of us process a staggering 60,000 thoughts, and an
              overwhelming 80% of these tend to be negative, regardless of our
              success. Can you imagine the personal growth that could be made in
              our lives through a shift in this mindset? Let Larry show you how.
            </p>
            <div className="w-full pt-5">
              <Link href="/contact">
                <Button className="group">
                  <span>get in touch</span>
                  <ChevronRight
                    size={14}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative basis-2/5 items-center justify-center self-stretch sm:basis-1/2 lg:basis-[45%]">
          <div className="relative h-full w-full">
            <Image
              src={mindset}
              className="object-cover"
              fill
              alt="Women working out"
              quality={65}
              sizes="(min-width: 1440px) 572px, (min-width: 1040px) calc(37.89vw + 34px), (min-width: 780px) calc(100vw - 88px), calc(100vw - 48px)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mindset;
