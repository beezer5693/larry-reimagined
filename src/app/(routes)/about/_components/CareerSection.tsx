import AnimateElement from "@/components/shared/animation/AnimateElement";
import Image from "next/image";
import careerImage from "../../../../../public/assets/about/career.jpeg";

const CareerSection = () => {
  return (
    <section className="mb-28 w-full bg-white md:mb-36 md:px-10 xl:mb-60">
      <div className="mx-auto w-full max-w-[700px] lg:max-w-screen-2xl">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex basis-[45%] flex-col">
            <div className="px-5 md:px-0">
              <AnimateElement className="mb-8" y={50} duration={0.75}>
                <h3 className="balance-text text-center font-semibold tracking-tight text-gray-950 lg:text-left">
                  Career Journey
                </h3>
              </AnimateElement>
              <div className="font-medium text-gray-800 md:text-lg lg:max-w-[625px] lg:text-xl">
                <AnimateElement y={50} duration={0.75} delay={0.2}>
                  <p className="sub-heading--small balance-text mb-4 text-center lg:text-left">
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
                  <p className="sub-heading--small balance-text mb-4 text-center lg:text-left">
                    After a few years, I partnered with three others to
                    represent multiple insurance companies as independent sales
                    producers. Although this venture was successful, two
                    partners and I decided to pursue different paths amicably.
                    In 1989, I established a separate entity in Florida,
                    specializing in high-end income, gift, and estate tax
                    planning, which expanded to include approximately 30
                    individual office locations along the East Coast of the
                    United States by 1999. I then developed a successful
                    business plan that attracted Wall {`Street's`} interest,
                    leading to the acquisition and subsequent public offering of
                    my company in 2005.
                  </p>
                </AnimateElement>
                <AnimateElement y={50} duration={0.75} delay={0.4}>
                  <p className="sub-heading--small balance-text text-center lg:text-left">
                    Following this, I launched a second company in South
                    Florida, focusing on life insurance sales and life
                    settlements for ultra-wealthy clients. For two-thirds of my
                    career, I thrived as a multi-million-dollar per year
                    commissioned producer, achieving my best year in 2006 with
                    over $52 million in life insurance commissions. In 2007, I
                    decided to close the company and effectively retire.
                  </p>
                </AnimateElement>
              </div>
            </div>
          </div>
          <div className="h-[400px] overflow-hidden sm:rounded-md sm:shadow-2xl sm:shadow-neutral-800/80 md:h-[600px] lg:h-[800px] lg:flex-1">
            <Image
              src={careerImage}
              className="h-full w-full object-cover brightness-150 lg:object-[-200px_0px]"
              alt="Larry arm in arm with friends"
              quality={65}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
