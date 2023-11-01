import AnimateElement from "@/components/shared/animation/AnimateElement";
import Carousel from "@/components/shared/animation/Carousel";

const KeySection = () => {
  return (
    <section className="mb-40 flex w-full flex-col items-center bg-white px-5 pt-28 md:mb-52 md:px-10 md:pt-36 xl:mb-[16rem] xl:pt-44">
      <div className="w-full max-w-[1000px]">
        <div className="flex w-full max-w-[800px] flex-col justify-between gap-8 text-gray-950">
          <AnimateElement className="basis-3/5" y={50} duration={0.75}>
            <h2 className="text-5xl font-semibold tracking-tighter text-gray-950 md:text-6xl lg:mr-32 lg:text-7xl">
              My 5 essential keys to a new mindset.
            </h2>
          </AnimateElement>
          <AnimateElement
            className="flex-1 sm:max-w-[65ch]"
            y={50}
            duration={0.75}
            delay={0.2}
          >
            <p className="font-medium text-gray-800 lg:text-xl">
              It took me some time to realize how my mindset influenced my life,
              but applying my{" "}
              <span className="font-semibold">{`"Five Keys to a New Mindset"`}</span>{" "}
              can bring transformative change and elevate your personal and
              professional life.
            </p>
          </AnimateElement>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default KeySection;
