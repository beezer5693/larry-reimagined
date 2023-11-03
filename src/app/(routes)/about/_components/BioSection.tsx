import AnimateElement from "@/components/shared/animation/AnimateElement";
import larryWedding from "../../../../../public/assets/about/larryWedding.jpeg";
import Image from "next/image";

const BioSection = () => {
  return (
    <section className="mb-28 w-full px-5 md:mb-36 md:px-10 xl:mb-60">
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-20 lg:px-10">
          <div className="flex basis-1/2 flex-col">
            <div>
              <AnimateElement className="mb-8" y={50} duration={0.75}>
                <h3 className="text-5xl font-semibold tracking-tighter text-gray-950 md:text-6xl">
                  Meet Larry Bryan.
                </h3>
              </AnimateElement>
              <div className="font-medium text-gray-800 md:text-lg lg:max-w-[625px] lg:text-xl">
                <AnimateElement y={75} duration={0.75} delay={0.2}>
                  <p className="mb-4">
                    I am a University of Miami graduate with a BA in Accounting
                    and Finance and an MBA in Finance from Nova Southeastern
                    University. I also hold several prestigious insurance
                    designations, including CLU, CHFC, CFP, and RHU, along with
                    various licenses for fixed and variable life insurance and
                    investment (series 6, 7, 23, and 24).
                  </p>
                </AnimateElement>
                <AnimateElement y={75} duration={0.75} delay={0.3}>
                  <p className="mb-4">
                    My career in the life insurance and investment industry
                    spanned nearly three decades, driven by commission-based
                    earnings, which instilled a strong sense of motivation and
                    responsibility in me. My ability to provide for my family
                    directly depended on my sales performance.
                  </p>
                </AnimateElement>
                <AnimateElement y={75} duration={0.75} delay={0.4}>
                  <p>
                    Today, I have transitioned into full-time public speaking,
                    where I inspire sales and marketing professionals to develop
                    a positive mindset, enabling them to achieve remarkable
                    success in both their business and personal lives.
                  </p>
                </AnimateElement>
              </div>
            </div>
          </div>
          <div className="h-[400px] overflow-hidden shadow-2xl shadow-neutral-600/50 md:h-[600px] lg:h-[700px] lg:flex-1">
            <Image
              src={larryWedding}
              className="h-full w-full object-cover object-top"
              alt="Larry sitting on couch"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
