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
        <h1 className="text-6xl font-medium tracking-tighter md:text-7xl lg:text-8xl xl:text-9xl">
          Welcome to <br />
          the{" "}
          <span className="font-semibold text-[#3a53f5]">
            {`Lion's`} Den <br className="hidden sm:block" /> Podcast
          </span>
        </h1>
        <p className="mt-10">Podcasts coming soon...</p>
      </div>
    </section>
  );
};

export default HeroSection;
