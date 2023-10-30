import AnimateElement from "@/components/shared/animation/AnimateElement";
import { Button } from "@/components/ui/Button";
import { KEYS_TO_MASTER } from "@/constants";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Keys from "./Keys";

const KeySection = () => {
  return (
    <section className="flex w-full justify-center bg-white px-5 pt-24 md:px-10 lg:pt-40">
      <div className="w-full max-w-screen-2xl">
        <div className="space-y-16 lg:space-y-20">
          <div className="flex flex-col justify-center gap-8 text-gray-950 lg:items-center">
            <h2 className="text-5xl font-semibold tracking-tighter text-gray-950 md:text-6xl lg:text-center lg:text-7xl">
              The 5 essential keys <br className="hidden sm:block" />
              to a new mindset.
            </h2>
            <AnimateElement>
              <p className="max-w-[60ch] font-semibold text-gray-600/90 lg:text-center lg:text-lg">
                It took me some time to realize how my mindset influenced my
                life, but you {"don't"} have to take as long as I did.{" "}
                <span className="text-gray-950">
                  Applying my Five Keys to a New Mindset can expedite the
                  process, offering a transformative effect, a more positive
                  outlook on life, and unleashing new, positive behaviors
                </span>{" "}
                that elevate your personal and professional life to new heights.
              </p>
            </AnimateElement>
            <AnimateElement>
              <div className="flex w-full flex-col gap-3 pt-2.5 sm:flex-row">
                <Link className="sm:max-w-max" href="/talks">
                  <Button
                    className="w-full bg-gray-900 text-white hover:opacity-90"
                    variant={"secondary"}
                  >
                    <span>See My Talks</span>
                    <ArrowUpRight className="ml-2" size={16} />
                  </Button>
                </Link>
                <Link className="sm:max-w-max" href="/contact">
                  <Button className="group w-full hover:brightness-125">
                    <span>reach out</span>
                    <ArrowRight
                      className="ml-2 transition duration-500 ease-in-out group-hover:translate-x-1.5"
                      size={16}
                    />
                  </Button>
                </Link>
              </div>
            </AnimateElement>
          </div>
          <Keys keys={KEYS_TO_MASTER} />
        </div>
      </div>
    </section>
  );
};

export default KeySection;
