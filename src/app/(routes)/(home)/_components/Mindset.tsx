import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import mindset from "../../../../../public/assets/home/mindset.jpg";

const Mindset = () => {
  return (
    <section className="flex w-full justify-center bg-black px-5 py-20 md:px-10">
      <div className="relative flex h-[525px] w-full max-w-screen-2xl flex-col items-center gap-10 sm:h-[600px] md:h-[650px] lg:h-[450px] lg:flex-row">
        <div className="relative flex flex-col self-stretch bg-black lg:flex-1 lg:items-center lg:justify-center lg:pr-5">
          <div className="flex flex-col items-center gap-5 sm:items-start">
            <h2 className="text-center text-4xl font-bold leading-8 tracking-tighter text-white sm:text-left sm:text-5xl md:text-6xl md:leading-[55px]">
              Your Mindset Matters.
            </h2>
            <p className="max-w-[50ch] pb-3 text-center text-sm text-white sm:text-left sm:text-base lg:max-w-[50ch]">
              Every day, 95% of us process a staggering 60,000 thoughts, and an
              overwhelming 80% of these tend to be negative, regardless of our
              success. Can you imagine the personal growth that could be made in
              our lives through a shift in this mindset? Let Larry show you how.
            </p>
            <Link className="inline-block w-full sm:max-w-max" href="/contact">
              <Button className="w-full hover:brightness-125">
                <span>get in touch</span>
                <ArrowUpRight className="-mt-0.5 ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative flex-1 items-center justify-center self-stretch overflow-hidden lg:flex-none lg:basis-[45%] lg:rounded-l-sm">
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
