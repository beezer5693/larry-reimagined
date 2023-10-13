import Button from "@/components/ui/Button";
import Image from "next/image";
import larry from "../../../../../public/assets/home/hero.png";

const HeroSection = () => {
  return (
    <div className="border-b border-dashed border-white pb-10 pt-7">
      <section className="relative flex flex-col items-center rounded-sm border border-black bg-indigo-500 md:flex-row md:justify-between">
        {/* Hero background */}
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-sm bg-indigo-400"></div>

        {/* Hero text and buttons */}
        <div className="h-full space-y-4 px-4 pt-10 md:pl-11 md:pt-0 lg:pl-20">
          <h1 className="text-center text-5xl leading-[45px] tracking-tighter sm:text-6xl md:text-left md:leading-[50px] lg:text-7xl lg:leading-[60px]">
            Dare to <span className="md:hidden">think</span> <br />{" "}
            <span className="hidden md:inline-block">think</span>{" "}
            <span className="font-bold italic">Different.</span>
          </h1>
          <p className="max-w-[45ch] text-center leading-5 md:text-left lg:text-lg lg:leading-5">
            Harnessing the immense potential within to transmute personal
            obstacles into reservoirs of self-empowerment.
          </p>
          <div className="flex flex-col-reverse justify-center gap-3 pt-4 md:flex-row md:justify-start md:pt-5">
            <Button
              className="w-full rounded-full"
              className2="rounded-full"
              size={"lg"}
              variant={"secondaryWithHoverAnimation"}
            >
              Services
            </Button>
            <Button
              variant={"secondaryWithHoverAnimation"}
              className="w-full rounded-full hover:bg-yellow-400"
              className2="rounded-full"
              size={"lg"}
            >
              Book Larry
            </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative self-stretch md:w-[45%]">
          <div className="relative h-[300px] sm:h-[500px] md:h-[500px]">
            <Image
              className="object-cover object-center"
              src={larry}
              fill
              sizes="(min-width: 1360px) 575px, (min-width: 1040px) calc(53.33vw - 140px), (min-width: 780px) calc(66.25vw - 236px), calc(100vw - 42px)"
              alt="Larry Bryan"
              quality={65}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
