import Image from "next/image";
import heroImage from "../../../../../public/assets/about/about-hero-image.jpg";
import AnimateElement from "@/components/shared/animation/AnimateElement";

const HeroSection = () => {
  return (
    <section className="relative mx-auto mb-28 flex w-full justify-center bg-white px-5 pt-16 md:mb-36 md:px-10 lg:pt-20 xl:mb-44">
      <div className="w-full max-w-screen-xl space-y-10 lg:space-y-16">
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-20">
          <AnimateElement className="basis-[65%]" y={-50} duration={0.75}>
            <h2 className="text-balance basis-1/2 font-semibold tracking-tighter lg:text-left">
              <span>The Man.</span>{" "}
              <span className="whitespace-nowrap">The Myth.</span>{" "}
              <span className="whitespace-nowrap">The Mindset.</span>
            </h2>
          </AnimateElement>
          <AnimateElement duration={0.75} delay={0.8}>
            <p className="sub-heading max-w-[50ch] font-medium text-gray-800">
              Your mindset is the key to your success. Larry has spent his
              entire life mastering the art of positive mindset and is ready to
              share his secrets with you. Read more about Larry and his journey
              to becoming a mindset master.
            </p>
          </AnimateElement>
        </div>
        <div className="relative h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
          <Image
            src={heroImage}
            className="h-full rounded-2xl object-cover"
            alt="larry sitting in a chair"
            quality={65}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
