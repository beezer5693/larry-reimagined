import AnimateElement from "@/components/shared/animation/AnimateElement";

const ThoughtSection = () => {
  return (
    <section className="mb-20 w-full bg-black pb-20 md:pb-24 xl:mb-60 xl:pb-36">
      <div className="mx-auto w-full max-w-[700px] space-y-16 px-5 pt-28 md:px-10 md:pt-20 lg:max-w-screen-2xl lg:space-y-20 xl:pt-32">
        <div className="flex flex-col items-start gap-8 lg:items-center">
          <AnimateElement y={50} duration={0.75}>
            <h2 className="balance-text max-w-[25ch] text-center font-semibold tracking-tight text-gray-100">
              No one is born with exceptional sales skills - you learn them
            </h2>
          </AnimateElement>
          <AnimateElement y={50} duration={0.75} delay={0.2}>
            <p className="balance-text sub-heading text-center font-medium text-gray-200">
              <span className="font-black">55%</span> of people in sales do not
              possess the full set of skills and mindset necessary to reach the
              top 1% in their industry. Investing in sales training, has been
              shown to produce a <span className="font-black">353%</span> ROI in
              production.
            </p>
          </AnimateElement>
        </div>
        {/* <Thoughts data={NEGATIVE_THOUGHTS} /> */}
      </div>
    </section>
  );
};

export default ThoughtSection;
