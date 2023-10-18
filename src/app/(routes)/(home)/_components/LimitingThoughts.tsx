import { NEGATIVE_THOUGHTS } from "@/constants";
import Image from "next/image";
import ThoughtCards from "./ThoughtCards";
import struggle from "../../../../../public/assets/home/struggle.jpeg";

const LimitingThoughts = () => {
  return (
    <section className="relative flex w-full justify-center px-5 pb-20 pt-16 md:px-10">
      <div className="relative w-full max-w-screen-2xl space-y-10 lg:space-y-16">
        <div className="flex flex-col items-center space-y-6 sm:items-start lg:items-center">
          <div className="inline-block pb-3 text-xs text-black">
            <p className="inline-flex items-center rounded-full border bg-black px-3 py-1 font-semibold capitalize text-white">
              Your mindset determines your life
            </p>
          </div>
          <h2 className="text-center text-4xl font-bold leading-8 tracking-tighter text-black sm:text-left sm:text-5xl sm:leading-10 md:text-6xl md:leading-[50px] lg:text-center">
            Thoughts That Limit <br className="lg:hidden" /> Our Potential.
          </h2>
          <p className="max-w-[65ch] text-center text-sm text-black sm:text-left sm:text-base sm:leading-[20px] lg:text-center">
            The conversations we have with ourselves on a daily basis have a
            significant impact on the results we get. Do any of these thoughts
            ever hold you back in your life or career?
          </p>
        </div>
        <div className="relative flex h-[700px] w-full flex-col-reverse items-center gap-3 md:h-[800px] lg:h-[550px] lg:flex-row-reverse lg:pl-0">
          <div className="relative basis-2/5 items-center justify-center self-stretch  overflow-hidden shadow-2xl shadow-neutral-500/50 sm:basis-1/2 lg:basis-[45%] lg:rounded-r-sm">
            <Image
              src={struggle}
              className="object-cover grayscale"
              fill
              alt="Women working out"
              quality={65}
              sizes="(min-width: 1440px) 572px, (min-width: 1040px) calc(37.89vw + 34px), (min-width: 780px) calc(100vw - 88px), calc(100vw - 48px)"
            />
          </div>
          <ThoughtCards data={NEGATIVE_THOUGHTS} />
        </div>
      </div>
    </section>
  );
};

export default LimitingThoughts;
