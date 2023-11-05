import AnimateElement from "@/components/shared/animation/AnimateElement";
import { MY_TALKS } from "@/constants";
import Talks from "./Talks";

const TalkSection = () => {
  return (
    <section className="mb-32 w-full bg-white px-5 md:px-10">
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="space-y-16 lg:space-y-20">
          <div className="flex flex-col justify-center gap-8 text-gray-950 lg:items-center">
            <AnimateElement y={50} duration={0.75}>
              <h2 className="balance-text font-semibold tracking-tighter lg:text-center">
                Talks to inspire your audience.
              </h2>
            </AnimateElement>
            <AnimateElement y={50} duration={0.75} delay={0.2}>
              <p className="balance-text sub-heading pb-2 font-medium text-gray-800 sm:max-w-[75ch] lg:text-center">
                Join Larry in a transformative journey with these three
                compelling talks designed to uplift and inspire your audience.
                Larry brings his wealth of knowledge and passion for growth to
                the forefront, offering invaluable insights and strategies for
                personal and professional development. These talks are a gateway
                to empowering your audience and propelling them towards greater
                success.
              </p>
            </AnimateElement>
          </div>
          <div className="bg-gray-200/50 p-5 md:p-8 lg:p-10">
            <Talks talks={MY_TALKS} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkSection;
