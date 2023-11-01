import Image from "next/image";
import heroImage from "../../../../../public/assets/about/about-hero-image.jpg";
import AnimateElement from "@/components/shared/animation/AnimateElement";

const HeroSection = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center px-5 pb-24 pt-24 md:px-10">
      <div className="w-full max-w-[1400px] space-y-10 lg:space-y-16">
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-20">
          <AnimateElement className="basis-[65%]" y={-50} duration={0.75}>
            <h2 className="text-balance basis-1/2 text-5xl font-semibold tracking-tighter md:text-6xl lg:text-left lg:text-7xl">
              <span>The Man.</span>{" "}
              <span className="whitespace-nowrap">The Myth.</span>{" "}
              <span className="whitespace-nowrap">The Mindset.</span>
            </h2>
          </AnimateElement>
          <AnimateElement x={50} duration={0.75} delay={0.5}>
            <p className="max-w-[50ch] font-medium text-gray-800 lg:text-xl">
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
            className="h-full object-cover"
            alt="larry sitting in a chair"
            quality={65}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
