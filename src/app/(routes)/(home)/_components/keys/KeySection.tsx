import AnimateElement from "@/components/shared/animation/AnimateElement";
import { KEYS_TO_MASTER } from "@/constants";
import Keys from "./Keys";

const KeySection = () => {
  return (
    <section className="flex w-full justify-center bg-white px-5 pt-24 md:px-10 lg:pt-40">
      <div className="w-full max-w-[1400px]">
        <div className="space-y-16 lg:space-y-20">
          <div className="flex w-full flex-col gap-8 text-gray-950 lg:flex-row lg:items-center">
            <AnimateElement className="basis-[65%]" x={-50} duration={0.75}>
              <h2 className="text-5xl font-semibold tracking-tighter text-gray-950 md:text-6xl lg:mr-32 lg:text-7xl">
                The 5 essential keys to a new mindset.
              </h2>
            </AnimateElement>
            <AnimateElement
              className="basis-1/2 sm:max-w-max"
              y={50}
              duration={0.75}
              delay={0.5}
            >
              <p className="font-medium text-gray-600/90 lg:text-xl">
                It took me some time to realize how my mindset influenced my
                life, but you {"don't"} have to take as long as I did.{" "}
                <span className="text-gray-950">
                  Applying my Five Keys to a New Mindset can expedite the
                  process, offering a transformative effect, a more positive
                  outlook on life, and unleashing new, positive behaviors
                </span>{" "}
                that elevate your personal and professional life to new heights.
              </p>
            </AnimateElement>
          </div>
          <Keys keys={KEYS_TO_MASTER} />
        </div>
      </div>
    </section>
  );
};

export default KeySection;
