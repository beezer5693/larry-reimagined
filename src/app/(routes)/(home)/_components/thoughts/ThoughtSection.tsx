import AnimateElement from "@/components/shared/animation/AnimateElement";
import { NEGATIVE_THOUGHTS } from "@/constants";
import Thoughts from "./Thoughts";

const ThoughtSection = () => {
  return (
    <section className="mb-28 w-full bg-white px-5 pt-28 md:mb-36 md:px-10 md:pt-36 xl:mb-60 xl:pt-44">
      <div className="mx-auto w-full max-w-screen-xl space-y-16 lg:space-y-20">
        <div className="flex flex-col items-start gap-8 lg:items-center">
          <AnimateElement y={50} duration={0.75}>
            <h2 className="balance-text text-center font-semibold tracking-tight text-gray-950">
              Thoughts that limit our potential.
            </h2>
          </AnimateElement>
          <AnimateElement
            className="sm:max-w-max"
            y={50}
            duration={0.75}
            delay={0.2}
          >
            <p className="balance-text sub-heading text-center font-medium text-gray-800 sm:max-w-[65ch]">
              The conversations we have with ourselves on a daily basis have a
              significant impact on the results we get. Do any of these thoughts
              ever hold you back in your life or career?
            </p>
          </AnimateElement>
        </div>
        <Thoughts data={NEGATIVE_THOUGHTS} />
      </div>
    </section>
  );
};

export default ThoughtSection;
