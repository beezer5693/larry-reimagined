import AnimateElement from "@/components/shared/animation/AnimateElement";
import { MY_TALKS } from "@/constants";
import Talks from "./Talks";

const TalkSection = () => {
  return (
    <section className="mb-32 w-full bg-white px-5 md:px-10 lg:mb-44">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="space-y-16 lg:space-y-20">
          <div className="flex flex-col justify-center gap-8 text-gray-950 lg:items-center">
            <AnimateElement y={50} duration={0.75}>
              <h2 className="balance-text text-center font-semibold tracking-tight">
                Talks to inspire your audience.
              </h2>
            </AnimateElement>
            <AnimateElement y={50} duration={0.75} delay={0.2}>
              <p className="balance-text sub-heading pb-2 text-center font-medium text-gray-800 sm:max-w-[75ch]">
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

          <Talks talks={MY_TALKS} />
        </div>
      </div>
    </section>
  );
};

export default TalkSection;
