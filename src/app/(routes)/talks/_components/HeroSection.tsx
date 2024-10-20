import AnimateElement from "@/components/shared/animation/AnimateElement";
import Image from "next/image";
import heroImage from "../../../../../public/assets/talks/talk-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative mx-auto mb-28 flex w-full flex-col space-y-10 pt-10 md:mb-36 lg:space-y-16 lg:pt-16 xl:mb-44">
      <div className="w-full px-5 md:px-10">
        <div className="mx-auto w-full max-w-[700px] lg:max-w-screen-2xl">
          <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-20">
            <AnimateElement className="basis-[55%]" y={50} duration={0.75}>
              <h2 className="w-full text-center font-semibold tracking-tight lg:max-w-[15ch] lg:text-left">
                Talks that <span className="text-blue-600">inspire</span> and
                <span className="text-blue-600"> motivate</span> your team to
                get results<span className="text-blue-600"> faster</span>.
              </h2>
            </AnimateElement>
            <AnimateElement className="lg:flex-1" duration={0.75} delay={0.75}>
              <p className="sub-heading text-center font-medium text-gray-800 lg:text-left">
                Unlock the Path to success. These talks serve as a catalyst for
                motivating personal performance, enhancing team dynamics,
                fostering collaboration, and achieving remarkable results
                quickly. Each talk can be delivered in a keynote, breakout or
                workshop session.
              </p>
            </AnimateElement>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] w-full overflow-hidden sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[900px] 2xl:h-[1000px]">
        <Image
          src={heroImage}
          height={800}
          width={1200}
          className="h-full w-full object-cover object-bottom brightness-110"
          alt="larry sitting in a chair"
          quality={65}
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default HeroSection;
