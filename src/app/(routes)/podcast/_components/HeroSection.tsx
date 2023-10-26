import podcastHeroBg from "../../../../../public/assets/podcast/podcast.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex w-full flex-col items-center bg-white px-7 pb-10 pt-52 md:px-10 md:pb-12 md:pt-60 lg:pb-16 lg:pt-[28rem]">
      <div className="absolute inset-0 object-cover grayscale">
        <Image
          src={podcastHeroBg}
          alt="Podcast Hero Background"
          layout="fill"
          className="object-cover xl:object-left"
          sizes="100vw"
          quality={65}
          priority
        />
      </div>
      <div className="relative w-full max-w-screen-xl sm:pl-10 xl:pl-0">
        <h1 className="text-5xl font-medium tracking-tighter text-white md:text-7xl lg:text-8xl xl:text-9xl">
          Welcome to <br />
          the{" "}
          <span className="font-semibold text-[#3a53f5]">
            {`Lion's`} Den <br /> Podcast
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
