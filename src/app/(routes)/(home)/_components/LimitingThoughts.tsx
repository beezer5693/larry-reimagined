import { NEGATIVE_THOUGHTS } from "@/constants";
import ThoughtCards from "./ThoughtCards";
import dots from "../../../../../public/assets/home/dot-grid.png";
import Image from "next/image";
import mindset from "../../../../../public/assets/home/mindset.jpg";

const LimitingThoughts = () => {
  return (
    <section className="relative flex w-full justify-center px-5 pb-20 pt-16 md:px-10">
      <div className="relative w-full max-w-screen-xl space-y-10">
        <div className="space-y-4">
          <div className="inline-block pb-3 text-xs text-black">
            <p className="inline-flex items-center rounded-full border bg-black px-3 py-1 font-semibold capitalize text-white">
              Your mindset determines your life
            </p>
          </div>
          <h2 className="text-4xl font-bold leading-10 tracking-tight text-black md:text-[2.5rem] md:leading-10">
            Thoughts That Limit Our Potential
          </h2>
          <p className="max-w-[60ch] leading-[20px] text-black">
            The conversations we have with ourselves on a daily basis have a
            significant impact on the results we get. Do any of these thoughts
            ever hold you back in your life or career?
          </p>
        </div>
        <ThoughtCards data={NEGATIVE_THOUGHTS} />
        {/* <div className="flex w-full border-b-8 border-l-8 border-[#3a53f5]">
          <div className="relative h-[500px] basis-1/2">
            <Image
              className="object-cover"
              src={mindset}
              alt="woman working out"
              fill
            />
          </div>
          <div className="relative basis-1/2"></div>
        </div> */}
      </div>
    </section>
  );
};

export default LimitingThoughts;
