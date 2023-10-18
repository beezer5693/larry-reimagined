import Image from "next/image";
import mindset from "../../../../../public/assets/home/mindset.jpg";
import Button from "@/components/ui/Button";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const Mindset = () => {
  return (
    <section className="flex w-full justify-center bg-black px-5 py-20 md:px-10">
      <div className="relative flex h-[600px] w-full max-w-screen-2xl flex-col items-center gap-5 sm:h-[700px] sm:gap-0 md:h-[800px] lg:h-[500px] lg:flex-row">
        <div className="relative flex flex-1 flex-col self-stretch bg-black pr-5 sm:justify-center">
          <div className="space-y-5">
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl md:leading-[55px]">
              Your Mindset Matters.
            </h2>
            <p className="max-w-[60ch] text-sm text-white sm:text-base">
              Every day, 95% of us process a staggering 60,000 thoughts, and an
              overwhelming 80% of these tend to be negative, regardless of our
              success. Can you imagine the personal growth that could be made in
              our lives through a shift in this mindset? Let Larry show you how.
            </p>
            <div className="w-full sm:pt-5">
              <Link href="/contact">
                <Button className="hover:brightness-125">
                  <span>get in touch</span>
                  <ArrowUpRight className="-mt-0.5 ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative basis-1/2 items-center justify-center self-stretch overflow-hidden  lg:basis-[45%] lg:rounded-l-sm">
          <Image
            src={mindset}
            className="object-cover brightness-125"
            fill
            alt="Women working out"
            quality={65}
            sizes="(min-width: 1440px) 572px, (min-width: 1040px) calc(37.89vw + 34px), (min-width: 780px) calc(100vw - 88px), calc(100vw - 48px)"
          />
        </div>
      </div>
    </section>
  );
};

export default Mindset;
