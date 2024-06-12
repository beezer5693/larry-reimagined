import AnimateElement from "@/components/shared/animation/AnimateElement";
import { KEYS_TO_MASTER } from "@/constants";
import Keys from "./Keys";

const KeySection = () => {
  return (
    <section className="mb-28 w-full bg-white px-5 pt-28 md:mb-36 md:px-10 md:pt-36 xl:mb-60 xl:pt-44">
      <div className="mx-auto w-full max-w-[700px] space-y-10 lg:max-w-screen-2xl lg:space-y-16">
        <div className="flex w-full flex-col justify-between gap-8 text-gray-950 lg:flex-row lg:items-center">
          <AnimateElement className="basis-3/5" y={50} duration={0.75}>
            <h2 className="balance-text text-center font-semibold tracking-tight text-gray-950 lg:mr-32 lg:text-left">
              My 5 essential traits to be a top 1% producer
            </h2>
          </AnimateElement>
          <AnimateElement className="flex-1" duration={0.8} delay={0.2}>
            <p className="sub-heading text-center font-medium text-gray-800 lg:text-left">
              It took me some time to realize how my mindset influenced my life,
              but applying my{" "}
              <span className="font-semibold">{`"Five Keys to a New Mindset"`}</span>{" "}
              can bring transformative change and elevate your personal and
              professional life and performance.
            </p>
          </AnimateElement>
        </div>
        <Keys keys={KEYS_TO_MASTER} />
      </div>
    </section>
  );
};

export default KeySection;
