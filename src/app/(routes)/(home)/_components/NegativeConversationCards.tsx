import { ChevronRight } from "lucide-react";

type CardProps = {
  data: {
    label: string;
    description: string;
  }[];
};

const NegativeConversationCards = ({ data }: CardProps) => {
  return (
    <div className="grid w-full grid-cols-12 gap-5 text-black">
      <div className="relative col-span-12 flex flex-col items-center justify-center border border-black bg-[‚] p-10 md:col-span-7 lg:col-span-5">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 border border-black bg-black"></div>
        <div className="space-y-5">
          <h3
            style={{ textShadow: "2px 2px 0px rgb(0, 0, 0)" }}
            className="text-3xl font-semibold text-white lg:text-5xl"
          >
            {data[0].label}
          </h3>
          <p className="text-white lg:text-lg lg:leading-6">
            {data[0].description}
          </p>
          <div className="group flex cursor-pointer items-center gap-1 text-white hover:underline">
            <p>Learn more</p>
            <ChevronRight
              size={16}
              className="transition duration-200 ease-in-out group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
      <div className="justify-centerborder relative col-span-12 flex flex-col items-center border-black bg-black p-10 md:col-span-5 lg:col-span-4">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-[#3a53f5]"></div>
        <div className="space-y-5 text-white">
          <h3 className="text-3xl font-semibold">{data[1].label}</h3>
          <p>{data[1].description}</p>
          <div className="group flex cursor-pointer items-center gap-1 text-white hover:underline">
            <p>Learn more</p>
            <ChevronRight
              size={16}
              className="transition duration-200 ease-in-out group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
      <div className="relative col-span-12 flex flex-col items-center justify-center gap-5 border border-black bg-white p-10 md:col-span-5 lg:col-span-3">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-black"></div>
        <div className="space-y-5">
          <h3 className="text-3xl font-semibold lg:text-2xl">
            {data[2].label}
          </h3>
          <p>{data[2].description}</p>
          <div className="group flex cursor-pointer items-center gap-1 hover:underline">
            <p>Learn more</p>
            <ChevronRight
              size={16}
              className="transition duration-200 ease-in-out group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
      <div className="relative col-span-12 flex flex-col items-center justify-center gap-5 border border-black bg-black p-10 md:col-span-7 lg:col-span-3">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-[#3a53f5]"></div>
        <div className="space-y-5 text-white">
          <h3 className="text-3xl font-semibold lg:text-2xl">
            {data[3].label}
          </h3>
          <p>{data[3].description}</p>
          <div className="group flex cursor-pointer items-center gap-1 text-white hover:underline">
            <p>Learn more</p>
            <ChevronRight
              size={16}
              className="transition duration-200 ease-in-out group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
      <div className="relative col-span-12 flex flex-col items-center justify-center gap-5 border border-black bg-[#fffff8] p-10 md:col-span-7 lg:col-span-4">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-black"></div>
        <div className="space-y-5">
          <h3 className="text-3xl font-semibold">{data[4].label}</h3>
          <p>{data[4].description}</p>
          <div className="group flex cursor-pointer items-center gap-1 hover:underline">
            <p>Learn more</p>
            <ChevronRight
              size={16}
              className="transition duration-200 ease-in-out group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
      <div className="relative col-span-12 flex flex-col items-center justify-center gap-5 border border-black bg-[#3a53f5] p-10 md:col-span-5 lg:col-span-5">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2  bg-black"></div>
        <div className="space-y-5">
          <h3
            style={{ textShadow: "2px 2px 0px rgb(0, 0, 0)" }}
            className="text-3xl font-semibold text-white lg:text-5xl"
          >
            {data[5].label}
          </h3>
          <p className="text-white lg:text-lg lg:leading-6">
            {data[5].description}
          </p>
          <div className="group flex cursor-pointer items-center gap-1 text-white hover:underline">
            <p>Learn more</p>
            <ChevronRight
              size={16}
              className="transition duration-200 ease-in-out group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NegativeConversationCards;
