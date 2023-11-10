import Image from "next/image";
import heroImage from "../../../../../public/assets/about/about-hero-image.jpg";
import AnimateElement from "@/components/shared/animation/AnimateElement";

const HeroSection = () => {
  return (
    <section className="relative mx-auto mb-28 flex w-full flex-col space-y-10 bg-white pt-10 md:mb-36 lg:space-y-16 lg:pt-16 xl:mb-44">
      <div className="w-full px-5 md:px-10">
        <div className="mx-auto w-full max-w-[700px] lg:max-w-screen-2xl">
          <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-20">
            <AnimateElement className="basis-[55%]" y={50} duration={0.75}>
              <h2 className="balance-text text-center font-semibold tracking-tight lg:text-left">
                <span>The Man.</span>{" "}
                <span className="whitespace-nowrap">The Myth.</span>{" "}
                <span className="whitespace-nowrap text-blue-600">
                  The Mindset.
                </span>
              </h2>
            </AnimateElement>
            <AnimateElement className="lg:flex-1" duration={0.75} delay={0.75}>
              <p className="sub-heading text-center font-medium text-gray-800 lg:text-left">
                Your mindset is the key to your success. Larry has spent his
                entire life mastering the art of positive mindset and is ready
                to share his secrets with you. Read more about Larry and his
                journey to becoming a mindset master.
              </p>
            </AnimateElement>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] w-full sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[800px]">
        <Image
          src={heroImage}
          height={800}
          width={1200}
          className="h-full w-full object-cover object-center"
          alt="larry sitting in a chair"
          quality={65}
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default HeroSection;
