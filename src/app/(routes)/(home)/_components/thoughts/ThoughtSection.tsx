import AnimateElement from "@/components/shared/animation/AnimateElement";
import { NEGATIVE_THOUGHTS } from "@/constants";
import Thoughts from "./Thoughts";

const ThoughtSection = () => {
  return (
    <section className="mb-28 w-full bg-white md:mb-36 xl:mb-60">
      <div className="w-full bg-[#0f0e10] px-5 py-10 md:px-10">
        <div className="mx-auto max-w-[800px] text-center text-2xl text-white md:text-3xl">
          <AnimateElement duration={1}>
            <div className="font-medium">
              "Life is all about results and everyone wants them quickly. My
              talks offer the keys to achieving those remarkable results in life
              much faster."
            </div>
          </AnimateElement>
          <AnimateElement duration={1} delay={0.2}>
            <div className="mt-5 font-medium">- Larry Bryan</div>
          </AnimateElement>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[700px] space-y-16 px-5 pt-28 md:px-10 md:pt-36 lg:max-w-screen-2xl lg:space-y-20 xl:pt-44">
        <div className="flex flex-col items-start gap-8 lg:items-center">
          <AnimateElement y={50} duration={0.75}>
            <h2 className="balance-text text-center font-semibold tracking-tight text-gray-950">
              Thoughts that limit our potential.
            </h2>
          </AnimateElement>
          <AnimateElement y={50} duration={0.75} delay={0.2}>
            <p className="balance-text sub-heading text-center font-medium text-gray-800">
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
