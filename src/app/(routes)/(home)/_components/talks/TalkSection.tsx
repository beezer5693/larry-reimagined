import { MY_TALKS } from "@/constants";
import Talks from "./Talks";

const TalkSection = () => {
  return (
    <section className="flex w-full flex-col items-center bg-[#f5f5f7] px-7 py-24 md:px-10">
      <div className="w-full max-w-screen-xl">
        <div className="space-y-10 lg:space-y-16">
          <div className="flex flex-col justify-center gap-5 text-black lg:items-center">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-center">
              Talks to Inspire Your Audience.
            </h2>
            <p className="max-w-[70ch] pb-2 lg:text-center">
              Join Larry in a transformative journey with these three compelling
              talks designed to uplift and inspire your audience. Larry brings
              his wealth of knowledge and passion for growth to the forefront,
              offering invaluable insights and strategies for personal and
              professional development. These talks are a gateway to empowering
              your audience and propelling them towards success.
            </p>
          </div>
          <Talks talks={MY_TALKS} />
        </div>
      </div>
    </section>
  );
};

export default TalkSection;
