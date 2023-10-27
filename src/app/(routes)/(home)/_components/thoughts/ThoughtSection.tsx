import { NEGATIVE_THOUGHTS } from "@/constants";
import Thoughts from "./Thoughts";

const ThoughtSection = () => {
  return (
    <section className="flex w-full justify-center bg-white px-7 pt-24 md:px-10 lg:pt-40">
      <div className="w-full max-w-screen-xl space-y-16 lg:space-y-20">
        <div className="flex flex-col items-start gap-8 lg:items-center">
          <p className="font-medium text-gray-950">
            {`"Your mindset determines everything." - Larry Bryan`}
          </p>
          <h2 className="text-5xl font-semibold tracking-tighter text-gray-950 md:text-6xl lg:text-center lg:text-7xl">
            Thoughts that limit <br className="hidden sm:block" /> our
            potential.
          </h2>
          <p className="max-w-[55ch] font-semibold text-gray-600/90 lg:text-center lg:text-lg">
            The{" "}
            <span className="text-gray-950">
              conversations we have with ourselves on a daily basis have a
              significant impact on the results we get.
            </span>{" "}
            <span className="text-gray-950"></span> Do any of these thoughts
            ever hold you back in your life or career?
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <Thoughts data={NEGATIVE_THOUGHTS} />
        </div>
      </div>
    </section>
  );
};

export default ThoughtSection;
