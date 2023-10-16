import Image from "next/image";
import mindset from "../../../../../public/assets/home/mindset.jpg";
import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const MindsetSection = () => {
  return (
    <section className="flex w-full justify-center bg-black px-5 py-20 md:px-10">
      <div className="relative flex h-[850px] w-full max-w-screen-xl flex-col items-center before:absolute before:inset-0 before:-translate-x-2 before:translate-y-2 before:bg-[#3a53f5] lg:h-[550px] lg:flex-row before:lg:translate-x-2">
        <div className="relative flex flex-1 flex-col items-center justify-center self-stretch bg-black px-5 md:p-10 lg:w-1/2 lg:px-32">
          <div className="space-y-5">
            <h2 className="text-5xl font-bold tracking-tighter text-white md:text-6xl">
              Strengthen Your Mind
            </h2>
            <p className="max-w-[50ch] text-white lg:max-w-[40ch]">
              On any given day, 95% of people process a staggering 60,000
              thoughts, and an overwhelming 80% of these tend to be negative,
              regardless of their personal success. This underscores the
              substantial improvements that could be achieved in our lives
              through a shift in this mindset. Let Larry show you how.
            </p>
            <div className="w-full pt-5">
              <Link href="/contact">
                <Button className="group">
                  <span>get in touch</span>
                  <ChevronRight
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:opacity-100 "
                  />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative basis-1/2 items-center justify-center self-stretch">
          <div className="relative h-full w-full">
            <Image
              src={mindset}
              className="object-cover"
              fill
              alt="Man thinking"
              quality={65}
              sizes="(min-width: 1440px) 640px, (min-width: 1040px) calc(42.11vw + 42px), (min-width: 780px) calc(100vw - 80px), calc(100vw - 40px)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindsetSection;
