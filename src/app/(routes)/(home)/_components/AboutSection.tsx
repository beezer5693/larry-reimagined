import AnimateElement from "@/components/shared/animation/AnimateElement";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
import meetLarry from "../../../../../public/assets/home/meet-larry.png";

const AboutSection = () => {
  return (
    <section className="w-full overflow-hidden bg-[#0f0e10] px-5 py-28 md:px-10 md:py-36 xl:py-52">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-10 lg:flex-row-reverse lg:gap-28">
        <div className="flex basis-1/2 flex-col justify-center gap-8">
          <AnimateElement duration={0.75} y={50}>
            <h2 className="bg-gradient-to-b from-white from-40% to-gray-400 bg-clip-text pb-2.5 text-center font-semibold tracking-tight text-transparent lg:text-left">
              About Larry
            </h2>
          </AnimateElement>
          <div className="space-y-2 text-center text-gray-200/90 lg:max-w-[550px] lg:text-left">
            <AnimateElement y={50} duration={0.75} delay={0.1}>
              <p className="sub-heading balance-text pb-2 font-medium">
                I have spent most of my life learning and developing the
                necessary mindset to become an ultra-successful producer in the
                insurance and investment businesses where I discovered
                consistent predictable strategies, behaviors, and ways of
                thinking that I used to achieve extraordinary goals and income
                levels.
              </p>
            </AnimateElement>
            <AnimateElement y={50} duration={0.75} delay={0.2}>
              <p className="sub-heading balance-text pb-2 font-medium">
                The outset of my journey was fraught with formidable challenges,
                surpassing the typical hurdles encountered by most individuals.
                From the loss of my father when I was just four months old, to
                academic setbacks resulting in my departure from college, to the
                humbling experience of working as a janitor, to enduring the
                tragic suicide of three family members, and even falling victim
                to a multi-million-dollar scam—these were but a few of the
                trials I faced.
              </p>
            </AnimateElement>
            <AnimateElement y={50} duration={0.75} delay={0.3}>
              <p className="sub-heading balance-text pb-2 font-medium">
                However, my ability to overcome and navigate these adversities,
                eventually achieving the levels of success I did, can be
                attributed to my unwavering commitment to{" "}
                {`"Dare to Think Different"`}.
              </p>
            </AnimateElement>
          </div>
          <AnimateElement y={50} duration={0.75} delay={0.4}>
            <Link
              className="inline-block w-full sm:px-10 md:px-20 lg:max-w-max lg:px-0"
              href="/about"
            >
              <Button variant={"secondary"} className="w-full hover:opacity-90">
                <span>Read More</span>
                <PiArrowUpRightBold className="ml-2" size={16} />
              </Button>
            </Link>
          </AnimateElement>
        </div>
        <div className="lg:flex-basis-3/5 h-[500px] lg:h-[900px]">
          <Image
            className="hidden w-auto object-cover brightness-110 lg:block"
            src={meetLarry}
            height={500}
            width={500}
            quality={65}
            alt="Larry pointing at you"
          />
          <Image
            className="w-auto object-cover brightness-110 lg:hidden"
            src={meetLarry}
            height={200}
            width={200}
            quality={65}
            alt="Larry pointing at you"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
