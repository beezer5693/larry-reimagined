import Image from "next/image";
import podcastHeroBg from "../../../../../public/assets/podcast/podcast.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center px-5 before:absolute before:inset-0 before:bg-black/10 before:backdrop-blur-sm md:px-10">
      <Image
        src={podcastHeroBg}
        alt="Podcast Hero Background"
        fill
        className="object-cover"
        sizes="100vw"
        quality={65}
        priority
      />
      <div className="relative w-full max-w-screen-2xl text-white sm:pl-10 xl:pl-0">
        <h2 className="font-semibold tracking-tight">
          <span className="block text-4xl">Welcome to</span>
          <span className="my-4 block uppercase text-blue-600">
            The Life Lab
          </span>
          <span className="block text-4xl">with Larry Bryan</span>
        </h2>
        <p className="mt-6 text-lg font-medium">
          A podcast curating the formulas for success in life and business.
        </p>
        <p className="mt-4">Coming Soon...</p>
      </div>
    </section>
  );
};

export default HeroSection;
