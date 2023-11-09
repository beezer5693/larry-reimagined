import AnimateElement from "@/components/shared/animation/AnimateElement";
import Image from "next/image";
import talk1 from "../../../../../public/assets/talks/talk1.jpg";
import { MY_TALKS } from "@/constants";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PiArrowRightBold } from "react-icons/pi";

const Talk1 = () => {
  return (
    <section className="mb-28 w-full md:mb-36 md:px-10 xl:mb-60">
      <div className="mx-auto w-full max-w-[700px] lg:max-w-screen-2xl">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="flex basis-[45%] flex-col">
            <div className="w-full px-5 md:px-0">
              <AnimateElement className="mb-8" y={50} duration={0.75}>
                <h3 className="text-center font-semibold tracking-tight text-gray-950 lg:text-left">
                  {MY_TALKS[0].title}
                </h3>
              </AnimateElement>
              <div className="font-medium text-gray-800 md:text-lg lg:max-w-[600px] lg:text-xl">
                <AnimateElement y={50} duration={0.75} delay={0.2}>
                  <p className="sub-heading--small balance-text mb-4 text-center lg:text-left">
                    {MY_TALKS[0].details[0]}
                  </p>
                </AnimateElement>
                <AnimateElement y={50} duration={0.75} delay={0.3}>
                  <p className="sub-heading--small balance-text mb-4 text-center lg:text-left">
                    {MY_TALKS[0].details[1]}
                  </p>
                </AnimateElement>
                <AnimateElement y={50} duration={0.75} delay={0.4}>
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
          <div className="h-[400px] overflow-hidden sm:rounded-md sm:shadow-2xl sm:shadow-neutral-700/60 md:h-[600px] lg:h-[700px] lg:flex-1">
            <Image
              src={talk1}
              className="h-full w-full object-cover"
              alt="Salesman presenting product to customers"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talk1;
