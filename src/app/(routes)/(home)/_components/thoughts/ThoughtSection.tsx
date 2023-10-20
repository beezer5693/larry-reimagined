import { NEGATIVE_THOUGHTS } from "@/constants";
import Image from "next/image";
import Thoughts from "./Thoughts";
import struggle from "../../../../../../public/assets/home/struggling.jpeg";

const ThoughtSection = () => {
  return (
    <section className="flex w-full justify-center bg-white px-7 py-24 md:px-10">
      <div className="w-full max-w-screen-xl space-y-10 lg:space-y-16">
        <div className="flex flex-col items-start gap-5 lg:items-center">
          <p className="pb-3 font-medium text-black">
            {`"You mindset determines everything." - Larry Bryan`}
          </p>
          <h2 className="text-4xl font-bold tracking-tighter text-black sm:text-5xl lg:text-center">
            Thoughts That Limit <br className="lg:hidden" /> Our Potential.
          </h2>
          <p className="max-w-[65ch] text-black lg:text-center">
            The conversations we have with ourselves on a daily basis have a
            significant impact on the results we get. Do any of these thoughts
            ever hold you back in your life or career?
          </p>
        </div>
        <div className="flex h-[700px] w-full flex-col-reverse items-center gap-5 md:h-[800px] lg:h-[550px] lg:flex-row lg:pl-0">
          <div className="relative basis-2/5 items-center justify-center self-stretch overflow-hidden rounded-lg shadow-xl shadow-neutral-500/50 sm:basis-1/2 lg:basis-[45%]">
            <Image
              src={struggle}
              className="object-cover brightness-90"
              fill
              alt="Women working out"
              quality={65}
              sizes="(min-width: 1720px) 691px, (min-width: 1040px) calc(39.24vw + 24px), calc(96.67vw - 46px)"
            />
          </div>
          <Thoughts data={NEGATIVE_THOUGHTS} />
        </div>
      </div>
    </section>
  );
};

export default ThoughtSection;
