import AnimateElement from "@/components/shared/animation/AnimateElement";
import larryOnCouch from "../../../../../public/assets/about/about-bg.jpg";
import Image from "next/image";

const StorySection = () => {
  return (
    <section className="mb-28 w-full px-5 md:mb-36 md:px-10 xl:mb-60">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-32">
          <div className="flex basis-2/5 flex-col lg:py-20">
            <AnimateElement className="mb-8" y={50} duration={0.75}>
              <h3 className="text-5xl font-semibold tracking-tighter text-gray-950 md:text-6xl">
                Meet Larry Bryan.
              </h3>
            </AnimateElement>
            <div className="font-medium text-gray-800 md:text-lg lg:max-w-[600px] lg:text-xl">
              <AnimateElement y={50} duration={0.75} delay={0.2}>
                <p className="mb-4">
                  I am a graduate of the University of Miami, where I earned a
                  BA in Accounting and Finance. I also completed my MBA in
                  Finance at Nova Southeastern University. In addition to my
                  academic achievements, I hold several prestigious insurance
                  designations, including CLU, CHFC, CFP, and RHU. Moreover, I
                  was licensed for both fixed and variable life insurance and
                  possessed investment licenses such as series 6, 7, 23, and 24.
                </p>
              </AnimateElement>
              <AnimateElement y={50} duration={0.75} delay={0.3}>
                <p className="mb-4">
                  For nearly three decades, my career in the life insurance and
                  investment industry operated solely on a commission-generated
                  basis, meaning that my income was directly tied to my sales
                  performance. This high-pressure environment instilled a sense
                  of motivation and responsibility in me, as my ability to
                  provide for my family depended on my sales success.
                </p>
              </AnimateElement>
              <AnimateElement y={50} duration={0.75} delay={0.4}>
                <p>
                  Today, my focus has shifted towards full-time public speaking,
                  where I empower sales and marketing professionals to cultivate
                  a positive mindset. This mindset equips them to achieve
                  meteoric levels of success in both their business endeavors
                  and personal lives.
                </p>
              </AnimateElement>
            </div>
          </div>
          <div className="flex-1 self-stretch overflow-hidden shadow-2xl shadow-neutral-500/50">
            <Image
              src={larryOnCouch}
              className="h-full w-full scale-110 object-cover brightness-110 2xl:object-right"
              alt="Larry sitting on couch"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
