import AnimateElement from "@/components/shared/animation/AnimateElement";
import Image from "next/image";
import experienceImage from "../../../../../public/assets/about/experience.png";

const ExperienceSection = () => {
  return (
    <section className="w-full px-5 md:px-10">
      <div className="mx-auto max-w-screen-xl pb-36">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="h-[500px] lg:h-[800px]">
            <Image
              src={experienceImage}
              alt="larry speaking to audience"
              className="hidden w-auto object-cover brightness-110 lg:block"
              height={500}
              width={500}
              quality={65}
            />
            <Image
              className="w-auto object-cover brightness-110 lg:hidden"
              src={experienceImage}
              height={200}
              width={200}
              quality={65}
              alt="Larry pointing at you"
            />
          </div>
          <div className="flex flex-col justify-center gap-8">
            <AnimateElement duration={0.75} y={50}>
              <h3 className="font-semibold tracking-tighter text-gray-950">
                My experience.
              </h3>
            </AnimateElement>
            <div className="text-gray-800">
              <AnimateElement y={50} duration={0.75} delay={0.1}>
                <p className="sub-heading mb-4 font-medium lg:max-w-[45ch]">
                  I have spent most of my life learning and developing the
                  necessary mindset to become an ultra-successful producer in
                  the insurance and investment businesses where I discovered
                  consistent predictable strategies, behaviors, and ways of
                  thinking that I used to achieve extraordinary goals and income
                  levels.
                </p>
              </AnimateElement>
              <AnimateElement y={50} duration={0.75} delay={0.2}>
                <p className="sub-heading mb-4 font-medium lg:max-w-[45ch]">
                  The outset of my journey was fraught with formidable
                  challenges, surpassing the typical hurdles encountered by most
                  individuals. From the loss of my father when I was just four
                  months old, to academic setbacks resulting in my departure
                  from college, to the humbling experience of working as a
                  janitor, to enduring the tragic suicide of three family
                  members, and even falling victim to a multi-million-dollar
                  scam—these were but a few of the trials I faced.
                </p>
              </AnimateElement>
              <AnimateElement y={50} duration={0.75} delay={0.3}>
                <p className="sub-heading font-medium lg:max-w-[45ch]">
                  However, my ability to overcome and navigate these
                  adversities, eventually achieving the levels of success I did,
                  can be attributed to my unwavering commitment to{" "}
                  {`"Dare to Think Different"`}.
                </p>
              </AnimateElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
