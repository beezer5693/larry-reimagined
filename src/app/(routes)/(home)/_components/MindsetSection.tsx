import AnimateElement from "@/components/shared/animation/AnimateElement";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { PiArrowRightBold } from "react-icons/pi";
import larry from "../../../../../public/assets/home/mindset-larry.jpg";

const MindsetSection = () => {
  return (
    <section className="mb-32 w-full bg-white md:mb-44 md:px-10 xl:mb-60">
      <div className="mx-auto flex w-full max-w-[700px] flex-col items-center justify-between gap-5 lg:max-w-screen-2xl lg:flex-row lg:gap-10 xl:gap-20">
        <div className="mx-auto flex max-w-max flex-col self-stretch px-5 md:px-0">
          <div className="inline-block space-y-8 pb-10 text-gray-950 lg:py-32">
            <AnimateElement y={50} duration={0.75}>
              <h2 className="text-balance text-center font-semibold tracking-tight lg:text-left">
                Your mindset <br className="hidden lg:block" /> matters.
              </h2>
            </AnimateElement>
            <AnimateElement
              className="mx-auto max-w-max lg:mx-0"
              y={50}
              duration={0.75}
              delay={0.1}
            >
              <p className="sub-heading balance-text pb-3 text-center font-medium text-gray-800 lg:max-w-[600px] lg:text-left">
                Every day, 95% of us process a staggering 60,000 thoughts, and
                an overwhelming 80% of these tend to be negative, regardless of
                our success. Can you imagine the personal growth that could be
                made in our lives through a shift in this mindset? Let me show
                you how.
              </p>
            </AnimateElement>
            <AnimateElement y={50} duration={0.75} delay={0.2}>
              <Link
                className="inline-block w-full sm:px-10 md:px-20 lg:max-w-max lg:px-0"
                href="/contact"
              >
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
        <div className="basis-[50%] self-stretch">
          <AnimateElement className="h-full" y={75} duration={0.75}>
            <Image
              src={larry}
              className="h-full w-full object-cover object-right sm:rounded-2xl sm:shadow-2xl sm:shadow-neutral-700/60"
              alt="Larry sitting on a couch"
              quality={65}
            />
          </AnimateElement>
        </div>
      </div>
    </section>
  );
};

export default MindsetSection;
