import AnimateElement from "@/components/shared/animation/AnimateElement";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { PiArrowRightBold } from "react-icons/pi";
import { MY_TALKS } from "@/constants";
import talk2 from "../../../../../public/assets/talks/sig-talk.jpeg";

const Talk2 = () => {
  return (
    <section id="talk2" className="mb-28 w-full md:mb-36 md:px-10 xl:mb-60">
      <div className="mx-auto w-full max-w-[700px] lg:max-w-screen-2xl">
        <div className="flex w-full flex-col-reverse lg:flex-row lg:justify-between lg:gap-20 xl:gap-32">
          <div className="sm: h-[400px] overflow-hidden sm:shadow-2xl sm:shadow-neutral-700/60 md:h-[600px] lg:h-[700px] lg:flex-1">
            <Image
              src={talk2}
              alt="Larry as a child"
              className="h-full w-full object-cover"
              quality={65}
            />
          </div>
          <div className="mb-16 flex basis-[45%] flex-col lg:mb-0 lg:items-end">
            <div className="px-5 md:px-0">
              <AnimateElement
                className="mb-8 w-full text-center lg:text-left"
                y={50}
                duration={0.75}
              >
                <div className="inline-block rounded-full border border-gray-950 px-3 text-sm font-medium text-gray-950">
                  Keynote/Breakout
                </div>
              </AnimateElement>
              <AnimateElement
                className="mb-8"
                y={50}
                duration={0.75}
                delay={0.2}
              >
                <h3 className="balance-text text-center font-semibold tracking-tight text-gray-950 lg:text-left">
                  {MY_TALKS[1].title}
                </h3>
              </AnimateElement>
              <div className="font-medium text-gray-800 md:text-lg lg:max-w-[600px] lg:text-xl">
                <AnimateElement y={50} duration={0.75} delay={0.3}>
                  <p className="sub-heading--small balance-text mb-4 text-center lg:text-left">
                    {MY_TALKS[1].details[0]}
                  </p>
                </AnimateElement>
                <AnimateElement y={50} duration={0.75} delay={0.4}>
                  <p className="sub-heading--small balance-text mb-4 text-center lg:text-left">
                    {MY_TALKS[1].details[1]}
                  </p>
                </AnimateElement>
                <AnimateElement y={50} duration={0.75} delay={0.5}>
                  <div className="mt-8">
                    <Link
                      className="inline-block w-full px-10 md:px-20 lg:max-w-max lg:px-0"
                      href="/contact"
                    >
                      <Button className="group w-full hover:brightness-110">
                        <span>Book a Call</span>
                        <PiArrowRightBold
                          className="ml-2 transition duration-500 ease-in-out group-hover:translate-x-1.5"
                          size={16}
                        />
                      </Button>
                    </Link>
                  </div>
                </AnimateElement>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Talk2;
