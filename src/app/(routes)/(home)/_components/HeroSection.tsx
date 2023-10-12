import Button from "@/components/ui/Button";
import Image from "next/image";
import larry from "../../../../../public/assets/home/hero.png";

const HeroSection = () => {
  return (
    <div className="border-b border-dashed border-black py-7">
      <section className="relative flex flex-col items-center rounded-sm border border-black bg-gradient-to-br from-indigo-400 to-indigo-600 md:flex-row">
        {/* Hero background */}
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-sm bg-black"></div>

        {/* Hero text and buttons */}
        <div className="flex-1 space-y-4 px-4 pt-10 md:pl-8 md:pt-0 lg:pl-14">
          <p className="text-center text-5xl leading-[45px] tracking-tighter md:text-left lg:text-6xl lg:leading-[50px]">
            Dare to <br /> think{" "}
            <span className="font-bold italic">Different.</span>
          </p>
          <p className="max-w-[45ch] text-center leading-5 md:text-left lg:text-lg lg:leading-5">
            Harnessing the immense potential within to transmute personal
            obstacles into reservoirs of self-empowerment.
          </p>
          <div className="flex flex-col-reverse justify-center gap-3 pt-4 md:flex-row md:justify-start md:pt-5">
            <Button
              className="w-full rounded-full"
              className2="rounded-full"
              size={"lg"}
              variant={"secondary"}
            >
              Services
            </Button>
            <Button
              variant={"secondary"}
              className="w-full rounded-full hover:bg-yellow-400"
              className2="rounded-full"
              size={"lg"}
            >
              Book Larry
            </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative w-full self-stretch md:w-[45%]">
          <div className="relative h-[300px] sm:h-[600px] md:h-[475px]">
            <Image
              className="object-cover md:object-center"
              src={larry}
              fill
              alt=""
              quality={65}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
