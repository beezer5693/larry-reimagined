import Image from "next/image";
import mindset from "../../../../../public/assets/home/mindset.jpg";
import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const MindsetSection = () => {
  return (
    <div className="flex w-full justify-center border-b border-dashed border-black bg-black px-5 pb-16 pt-14 md:px-10">
      <div className="relative w-full max-w-screen-xl">
        <div className="absolute inset-0 translate-x-2 translate-y-2 bg-[#3a53f5]"></div>
        <div className="relative flex h-[800px] flex-col items-center overflow-hidden  lg:h-[550px] lg:flex-row">
          <div className="relative flex basis-1/2 flex-col items-center justify-center self-stretch bg-black p-10 lg:w-1/2 lg:px-32">
            <div className="space-y-3">
              <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                Strengthen <br className="hidden lg:inline-block" /> Your Mind
              </h2>
              <p className="max-w-[50ch] text-white lg:max-w-[40ch]">
                Cultivating and fortifying your mental resilience is an
                indispensable undertaking on the path of personal development,
                playing a fundamental role in achieving growth and fostering
                success in your life.
              </p>
              <div className="pt-5">
                <Link href="/contact">
                  <Button className="group">
                    <span>Book Larry</span>
                    <ChevronRight
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:opacity-100 "
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative basis-1/2 items-center justify-center self-stretch">
            <div className="relative h-full w-full">
              <Image
                src={mindset}
                className="object-cover"
                fill
                alt="Man thinking"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindsetSection;
