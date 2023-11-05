import AnimateElement from "@/components/shared/animation/AnimateElement";
import Image from "next/image";
import careerImage from "../../../../../public/assets/about/larry-career.png";

const CareerSection = () => {
  return (
    <section className="mb-28 w-full bg-white px-5 md:mb-36 md:px-10 xl:mb-60">
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:gap-20 lg:px-10">
          <div className="flex basis-1/2 flex-col">
            <div>
              <AnimateElement className="mb-8" y={50} duration={0.75}>
                <h3 className="font-semibold tracking-tighter text-gray-950">
                  My Career.
                </h3>
              </AnimateElement>
              <div className="font-medium text-gray-800 md:text-lg lg:max-w-[625px] lg:text-xl">
                <AnimateElement y={50} duration={0.75} delay={0.2}>
                  <p className="sub-heading mb-4">
                    In 1978, I began my career journey at Equitable Life, now
                    known as AXA, as an individual sales producer working on a
                    commission basis. My entry into the insurance industry was
                    influenced by a humorous challenge from my future
                    father-in-law, who playfully asserted that I should join the
                    insurance field if I wanted to marry his daughter, a high
                    school homecoming queen. I accepted this challenge and soon
                    found success at Equitable, setting and achieving high
                    goals.
                  </p>
                </AnimateElement>
                <AnimateElement y={50} duration={0.75} delay={0.3}>
                  <p className="sub-heading mb-4">
                    After a few years, I partnered with three others to
                    represent multiple insurance companies as independent sales
                    producers. Although this venture was successful, two
                    partners and I decided to pursue different paths amicably.
                    In 1989, I established a separate entity in Florida,
                    specializing in high-end income, gift, and estate tax
                    planning, which expanded to include approximately 30
                    individual office locations along the East Coast of the
                    United States by 1999. I developed a successful business
                    plan that attracted Wall {`Street's`} interest, leading to
                    the acquisition and subsequent public offering of my company
                    in 2005.
                  </p>
                </AnimateElement>
                <AnimateElement y={50} duration={0.75} delay={0.4}>
                  <p className="sub-heading">
                    Following this, I launched a second company in South
                    Florida, focusing on life insurance sales and life
                    settlements for ultra-wealthy clients. For two-thirds of my
                    career, I thrived as a multi-million-dollar commissioned
                    producer, achieving my best year in 2006 with over $52
                    million in life insurance commissions. In 2007, I decided to
                    close the company and effectively retire.
                  </p>
                </AnimateElement>
              </div>
            </div>
          </div>
          <div className="h-[400px] overflow-hidden rounded-2xl shadow-2xl  shadow-neutral-600/50 md:h-[600px] lg:h-[800px] lg:flex-1">
            <Image
              src={careerImage}
              className="h-full w-full object-cover object-top brightness-150"
              alt="Larry sitting on couch"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
