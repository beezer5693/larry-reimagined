import AnimateElement from "@/components/shared/animation/AnimateElement";
import { MY_TALKS } from "@/constants";
import Talks from "./Talks";

const TalkSection = () => {
  return (
    <section className="flex w-full flex-col items-center bg-white px-5 pb-24 md:px-10 lg:pb-40">
      <div className="w-full max-w-screen-2xl">
        <div className="space-y-16 lg:space-y-20">
          <div className="flex flex-col justify-center gap-8 text-gray-950 lg:items-center">
            <h2 className="text-5xl font-semibold tracking-tighter md:text-6xl lg:text-center lg:text-7xl">
              Talks to inspire <br /> your audience.
            </h2>
            <AnimateElement>
              <p className="max-w-[65ch] pb-2 font-semibold text-gray-600/90 lg:text-center lg:text-lg">
                Join Larry in a transformative journey with these three
                compelling talks designed to uplift and inspire your audience.
                Larry brings his{" "}
                <span className="text-gray-950">
                  wealth of knowledge and passion for growth to the forefront,
                  offering invaluable insights and strategies for personal and
                  professional development.
                </span>{" "}
                These talks are a gateway to empowering your audience and
                propelling them towards success.
              </p>
            </AnimateElement>
          </div>
          <div className="bg-[#f5f5f7] p-5 md:p-8 lg:p-10">
            <Talks talks={MY_TALKS} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkSection;
