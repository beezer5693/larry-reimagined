import { ChevronRight } from "lucide-react";

type CardProps = {
  data: {
    thought: string;
    description: string;
  }[];
};

const ThoughtCards = ({ data }: CardProps) => {
  return (
    <div className="relative grid w-full grid-cols-12 gap-5 text-black">
      <div className="relative col-span-12 flex flex-col items-center justify-center bg-[#3a53f5] p-10 before:absolute before:inset-0 before:-z-10 before:translate-x-2 before:translate-y-2 before:bg-black md:col-span-7 lg:col-span-4">
        {/* <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black"></div> */}
        <div className="space-y-5 text-white">
          <h3 className="text-3xl font-semibold">{data[6].thought}</h3>
          <p>{data[6].description}</p>
          <div className="group flex cursor-pointer items-center gap-1 hover:underline">
            <p>Learn more</p>
            <ChevronRight
              size={16}
              className="transition duration-200 ease-in-out group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
      <div className="relative col-span-12 flex flex-col items-center justify-center bg-black p-10 md:col-span-5 lg:col-span-4">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-[#3a53f5]"></div>
        <div className="space-y-5 text-white">
          <h3 className="text-3xl font-semibold">{data[1].thought}</h3>
          <p>{data[1].description}</p>
          <div className="group flex cursor-pointer items-center gap-1 hover:underline">
            <p>Learn more</p>
            <ChevronRight
              size={16}
              className="transition duration-200 ease-in-out group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
      <div className="relative col-span-12 flex flex-col items-center justify-center gap-5 border border-black bg-white p-10 md:col-span-5 lg:col-span-4">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-black"></div>
        <div className="space-y-5">
          <h3 className="text-3xl font-semibold leading-[30px]">
            {data[2].thought}
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
      <div className="relative col-span-12 flex flex-col items-center justify-center gap-5 bg-black p-10 md:col-span-7 lg:col-span-4">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-[#3a53f5]"></div>
        <div className="space-y-5 text-white">
          <h3 className="text-3xl font-semibold leading-[30px]">
            {data[3].thought}
          </h3>
          <p>{data[3].description}</p>
          <div className="group flex cursor-pointer items-center gap-1 hover:underline">
            <p>Learn more</p>
            <ChevronRight
              size={16}
              className="transition duration-200 ease-in-out group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
      <div className="relative col-span-12 flex flex-col items-center justify-center gap-5 border border-black bg-white p-10 md:col-span-7 lg:col-span-4">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-black"></div>
        <div className="space-y-5">
          <h3 className="text-3xl font-semibold">{data[4].thought}</h3>
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
      <div className="relative col-span-12 flex flex-col items-center justify-center gap-5 bg-[#3a53f5] p-10 md:col-span-5 lg:col-span-4">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2  bg-black"></div>
        <div className="space-y-5 text-white">
          <h3 className="text-3xl font-semibold">{data[5].thought}</h3>
          <p>{data[5].description}</p>
          <div className="group flex cursor-pointer items-center gap-1 hover:underline">
            <p>Learn more</p>
            <ChevronRight
              size={16}
              className="transition duration-200 ease-in-out group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
      <div className="relative col-span-12 flex flex-col items-center justify-center bg-[#3a53f5] p-10 md:col-span-7 lg:col-span-4">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-black"></div>
        <div className="space-y-5 text-white">
          <h3 className="text-3xl font-semibold">{data[0].thought}</h3>
          <p>{data[0].description}</p>
          <div className="group flex cursor-pointer items-center gap-1 hover:underline">
            <p>Learn more</p>
            <ChevronRight
              size={16}
              className="transition duration-200 ease-in-out group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
      <div className="relative col-span-12 flex flex-col items-center justify-center bg-black p-10 md:col-span-5 lg:col-span-4">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-[#3a53f5]"></div>
        <div className="space-y-5 text-white">
          <h3 className="text-3xl font-semibold">{data[8].thought}</h3>
          <p>{data[8].description}</p>
          <div className="group flex cursor-pointer items-center gap-1 hover:underline">
            <p>Learn more</p>
            <ChevronRight
              size={16}
              className="transition duration-200 ease-in-out group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
      <div className="relative col-span-12 flex flex-col items-center justify-center gap-5 border border-black bg-white p-10 md:col-span-5 lg:col-span-4">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-black"></div>
        <div className="space-y-5">
          <h3 className="text-3xl font-semibold lg:leading-[30px]">
            {data[9].thought}
          </h3>
          <p>{data[9].description}</p>
          <div className="group flex cursor-pointer items-center gap-1 hover:underline">
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

export default ThoughtCards;
