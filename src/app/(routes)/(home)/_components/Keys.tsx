import Button from "@/components/ui/Button";
import { KEYS_TO_MASTER } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Keys = () => {
  return (
    <section className="relative flex w-full justify-center bg-white px-5 py-20 md:px-10">
      <div className="w-full max-w-screen-2xl">
        <div className="space-y-10">
          <div className="space-y-4 text-black">
            <h2 className="text-4xl font-bold leading-10 tracking-tight md:text-[3rem] md:leading-10">
              5 Keys to a New Mindset.
            </h2>
            <p className="max-w-[60ch] pb-6 leading-[20px]">
              It took me some time to realize how my mindset influenced my life,
              but you {"don't"} have to take as long as I did. Applying my Five
              Keys to a New Mindset can expedite the process, offering a
              transformative effect, a more positive outlook on life, and
              unleashing new, positive behaviors that elevate your personal and
              professional life to new heights.
            </p>
            <Link href="/contact">
              <Button className="hover:opacity-90">
                <span>reach out</span>
                <ArrowUpRight className="-mt-0.5 ml-2" size={16} />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 shadow-xl shadow-neutral-500/50 md:grid-cols-5">
            {KEYS_TO_MASTER.map((key) => (
              <div
                key={key.title}
                className="relative flex flex-col overflow-hidden  bg-black text-white"
              >
                <div className="group relative h-[250px] overflow-hidden sm:h-[325px] lg:h-[350px]">
                  <Image
                    className={cn(
                      "object-cover grayscale transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:brightness-125",
                      key.style,
                    )}
                    src={key.imageSrc}
                    fill
                    alt={key.title}
                    sizes="(min-width: 1440px) 240px, (min-width: 780px) calc(18.13vw - 17px), calc(100vw - 40px)"
                    quality={65}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-black/70 transition-colors duration-500 ease-in-out group-hover:bg-black/0"></div>
                  <div className="absolute bottom-0 left-0 right-0 space-y-3 p-5">
                    <h3 className="text-2xl font-semibold capitalize tracking-tight">
                      {key.title}
                    </h3>
                    <p className="font-medium leading-[18px]">
                      {key.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Keys;
