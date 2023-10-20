import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type KeyProps = {
  data: {
    title: string;
    description: string;
    imageSrc: StaticImageData;
    style: string;
  };
};

const Key = ({ data }: KeyProps) => {
  return (
    <div
      key={data.title}
      className="flex flex-col overflow-hidden rounded-lg text-white shadow-xl shadow-neutral-500/50"
    >
      <div className="group relative h-[300px] overflow-hidden sm:h-[400px] md:h-[325px] lg:h-[350px]">
        <Image
          className={cn(
            "object-cover object-top grayscale transition duration-500 ease-in-out group-hover:brightness-125",
            data.style,
          )}
          src={data.imageSrc}
          fill
          alt={data.title}
          sizes="(min-width: 1720px) 298px, (min-width: 780px) calc(18.26vw - 12px), calc(100vw - 56px)"
          quality={65}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-black/30 transition-colors duration-500 ease-in-out group-hover:bg-black/0"></div>
        <div className="absolute bottom-0 left-0 right-0 space-y-3 p-5">
          <h3 className="text-3xl font-semibold capitalize tracking-tighter md:text-xl lg:text-2xl">
            {data.title}
          </h3>
          <p className="font-medium">{data.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Key;
