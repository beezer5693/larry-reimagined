import AnimateElement from "@/components/shared/animation/AnimateElement";
import Image from "next/image";
import heroImage from "../../../../../public/assets/talks/hero-talk.png";

const HeroSection = () => {
  return (
    <section className="relative mx-auto mb-28 flex h-[400px] w-full flex-col bg-white before:absolute before:inset-0 before:z-10 before:bg-gradient-to-b before:from-black/30 before:from-40% before:to-black/70 sm:h-[450px] md:mb-36 md:h-[500px] lg:h-[600px] xl:mb-44 xl:h-[800px]">
      <Image
        src={heroImage}
        fill
        sizes="100vw"
        className="h-full w-full object-cover"
        alt="larry sitting in a chair in his office"
        quality={65}
      />
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[700px] flex-col items-center justify-center lg:max-w-screen-xl">
        <div className="mb-4">
          <AnimateElement className="mb-8" y={50} duration={0.75}>
            <h1 className="balance-text text-center font-semibold tracking-tight text-white">
              Talks to <span className="text-blue-600">inspire</span> and{" "}
              <span className="text-blue-600">motivate</span> your team.
            </h1>
          </AnimateElement>
          <AnimateElement
            className="mx-auto sm:max-w-max"
            y={50}
            duration={0.75}
            delay={0.1}
          >
            <p className="sub-heading balance-text text-center font-medium text-white lg:max-w-[800px]">
              Embrace the {`"Dare to Think Different"`} motto igniting a
              transformative journey toward personal and professional
              excellence.
            </p>
          </AnimateElement>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
