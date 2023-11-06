import AnimateElement from "@/components/shared/animation/AnimateElement";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { PiArrowRightBold } from "react-icons/pi";
import larry from "../../../../../public/assets/about/about-bg.jpg";

const MindsetSection = () => {
  return (
    <section className="mb-32 w-full bg-white px-5 md:mb-44 md:px-10 xl:mb-60">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between gap-5 lg:flex-row lg:gap-10 xl:gap-20">
        <div className="flex flex-1 flex-col self-stretch">
          <div className="inline-block space-y-8 pb-10 text-gray-950 lg:py-24">
            <AnimateElement y={50} duration={0.75}>
              <h2 className="text-balance font-semibold tracking-tighter lg:text-left">
                Your mindset matters
              </h2>
            </AnimateElement>
            <AnimateElement y={50} duration={0.75} delay={0.1}>
              <p className="sub-heading max-w-[50ch] pb-3 font-medium text-gray-800 lg:max-w-[40ch] lg:text-left">
                Every day, 95% of us process a staggering 60,000 thoughts, and
                an overwhelming 80% of these tend to be negative, regardless of
                our success. Can you imagine the personal growth that could be
                made in our lives through a shift in this mindset? Let me show
                you how.
              </p>
            </AnimateElement>
            <AnimateElement y={50} duration={0.75} delay={0.2}>
              <Link className="inline-block sm:max-w-max" href="/contact">
                <Button className="group w-full hover:brightness-125">
                  <span>get in touch</span>
                  <PiArrowRightBold
                    className="ml-2 transition duration-500 ease-in-out group-hover:translate-x-1.5"
                    size={16}
                  />
                </Button>
              </Link>
            </AnimateElement>
          </div>
        </div>
        <div className="basis-[55%] self-stretch">
          <Image
            src={larry}
            className="h-full w-full rounded-2xl object-cover object-right shadow-2xl shadow-neutral-600/50"
            alt="Larry sitting on a couch"
            quality={65}
          />
        </div>
      </div>
    </section>
  );
};

export default MindsetSection;
