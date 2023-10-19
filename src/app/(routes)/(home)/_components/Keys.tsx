import Button from "@/components/ui/Button";
import { KEYS_TO_MASTER } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Keys = () => {
  return (
    <section className="flex w-full justify-center bg-white px-7 py-24 md:px-10">
      <div className="w-full max-w-screen-xl">
        <div className="space-y-10 lg:space-y-16">
          <div className="flex flex-col justify-center gap-5 text-black lg:items-center">
            <h2 className="text-4xl font-bold tracking-tighter text-black sm:text-5xl lg:text-center">
              5 Keys to a New Mindset.
            </h2>
            <p className="max-w-[65ch] pb-2 text-black lg:text-center">
              It took me some time to realize how my mindset influenced my life,
              but you {"don't"} have to take as long as I did. Applying my Five
              Keys to a New Mindset can expedite the process, offering a
              transformative effect, a more positive outlook on life, and
              unleashing new, positive behaviors that elevate your personal and
              professional life to new heights.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-[350px] sm:flex-row">
              <Link className="inline-block w-full" href="/talks">
                <Button
                  className="w-full bg-black text-white hover:opacity-90"
                  variant={"secondary"}
                >
                  <span>See My Talks</span>
                </Button>
              </Link>
              <Link className="inline-block w-full" href="/contact">
                <Button className="w-full hover:brightness-125">
                  <span>reach out</span>
                  <ArrowUpRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
            {KEYS_TO_MASTER.map((key) => (
              <div
                key={key.title}
                className="flex flex-col overflow-hidden rounded-lg bg-black text-white shadow-xl shadow-neutral-500/50"
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
                    sizes="(min-width: 1720px) 298px, (min-width: 780px) calc(18.26vw - 12px), calc(100vw - 56px)"
                    quality={65}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-black/90 transition-colors duration-500 ease-in-out group-hover:bg-black/0"></div>
                  <div className="absolute bottom-0 left-0 right-0 space-y-3 p-5">
                    <h3 className="text-3xl font-semibold capitalize tracking-tighter md:text-xl lg:text-2xl">
                      {key.title}
                    </h3>
                    <p className="font-medium">{key.description}</p>
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
