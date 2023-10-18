import Button from "@/components/ui/Button";
import { KEYS_TO_MASTER } from "@/constants";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Keys = () => {
  return (
    <section className="relative flex w-full justify-center bg-black px-5 pb-20 md:px-10">
      <div className="w-full max-w-screen-xl">
        <div className="space-y-10">
          <div className="space-y-4 text-white">
            <h2 className="text-4xl font-bold leading-10 tracking-tight md:text-[2.5rem] md:leading-10">
              5 Keys to a New Mindset
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
              <Button className="group">
                <span>book a call</span>
                <ChevronRight
                  size={14}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:opacity-100"
                />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
            {KEYS_TO_MASTER.map((key) => (
              <div
                key={key.title}
                className="relative flex flex-col border-b-8 border-[#3a53f5] bg-black text-white"
              >
                <div className="group relative h-[250px] overflow-hidden">
                  <Image
                    className={cn(
                      "object-cover grayscale transition-all duration-500 ease-in-out group-hover:scale-125",
                      key.style,
                    )}
                    src={key.imageSrc}
                    fill
                    alt={key.title}
                    sizes="(min-width: 1440px) 240px, (min-width: 780px) calc(18.13vw - 17px), calc(100vw - 40px)"
                    quality={65}
                  />
                </div>
                <div className="relative space-y-3 py-3">
                  <h3 className="text-2xl font-semibold capitalize tracking-tight">
                    {key.title}
                  </h3>
                  <p>{key.description}</p>
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
