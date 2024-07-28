import Image from "next/image";
import heroImage from "../../../../../public/assets/about/about-hero-image.jpg";
import AnimateElement from "@/components/shared/animation/AnimateElement";

const HeroSection = () => {
  return (
    <section className="relative mb-28 flex w-full flex-col space-y-10 bg-white pt-10 md:mb-36 lg:space-y-16 lg:pt-16 xl:mb-44">
      <div className="w-full px-5 md:px-10">
        <div className="mx-auto w-full max-w-[700px] lg:max-w-screen-2xl">
          <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-20">
            <AnimateElement className="basis-[55%]" y={50} duration={0.75}>
              <h2 className="text-center font-semibold tracking-tight lg:text-left">
                <span>The Man.</span>{" "}
                <span className="whitespace-nowrap">The Myth.</span>{" "}
                <span className="text-blue-600 md:whitespace-nowrap">
                  The Mindset Sales Master.
                </span>
              </h2>
            </AnimateElement>
            <AnimateElement className="lg:flex-1" duration={0.75} delay={0.75}>
              <p className="sub-heading text-center font-medium text-gray-800 lg:text-left">
                Larry has spent his entire career mastering the traits and
                mindset needed to become a{" "}
                <span className="italic">Top One Percenter</span> in the field
                of sales and entrepreneurial leadership and is ready to share
                his secrets with you. Read more about Larry and his journey in
                mastering the art of both.
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
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default HeroSection;
