import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

type CardProps = {
  data: {
    label: string;
    description: string;
  }[];
};

const NegativeConversationCards = ({ data }: CardProps) => {
  return (
    <div className="grid w-full grid-cols-10 gap-5 text-black">
      <div className="relative col-span-10 flex flex-col items-center justify-center rounded-sm border border-black bg-[#3a53f5] p-10 md:col-span-6 lg:col-span-5">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-sm border border-black bg-black"></div>
        <div className="space-y-5">
          <h3
            style={{ textShadow: "2px 2px 0px rgb(0, 0, 0)" }}
            className="text-3xl font-medium text-white lg:text-5xl"
          >
            {data[0].label}
          </h3>
          <p className="lg:text-lg lg:leading-6">{data[0].description}</p>
          <Button
            size={"sm"}
            variant={"secondaryWithHoverAnimation"}
            className="rounded-full text-xs"
            className2="rounded-full"
            className3="max-w-max"
          >
            <span>Learn More</span>
            <ArrowUpRight className="ml-1" size={18} />
          </Button>
        </div>
      </div>
      <div className="relative col-span-10 flex flex-col items-center justify-center rounded-sm border border-black bg-black p-10 md:col-span-4 lg:col-span-3">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-sm border border-black bg-[#3a53f5]"></div>
        <div className="space-y-5 text-white">
          <h3 className="text-3xl font-medium">{data[1].label}</h3>
          <p>{data[1].description}</p>
          <Button
            size={"sm"}
            variant={"secondaryWithHoverAnimation"}
            className="rounded-full text-xs"
            className2="rounded-full bg-[#3a53f5]"
            className3="max-w-max"
          >
            <span>Learn More</span>
            <ArrowUpRight className="ml-1" size={18} />
          </Button>
        </div>
      </div>
      <div className="relative col-span-10 flex flex-col items-center justify-center gap-5 rounded-sm border border-black bg-[#fffff8] p-10 md:col-span-4 lg:col-span-2">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-sm border border-black bg-black"></div>
        <div className="space-y-5">
          <h3 className="text-3xl font-medium lg:text-2xl">{data[2].label}</h3>
          <p className="lg:text-sm">{data[2].description}</p>
          <Button
            size={"sm"}
            variant={"secondaryWithHoverAnimation"}
            className="rounded-full text-xs"
            className2="rounded-full bg-yellow-300 border border-black"
            className3="max-w-max"
          >
            <span>Learn More</span>
            <ArrowUpRight className="ml-1" size={18} />
          </Button>
        </div>
      </div>
      <div className="relative col-span-10 flex flex-col items-center justify-center gap-5 rounded-sm border border-black bg-black p-10 md:col-span-6 lg:col-span-2">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-sm border border-black bg-[#3a53f5]"></div>
        <div className="space-y-5 text-white">
          <h3 className="text-3xl font-medium lg:text-2xl">{data[3].label}</h3>
          <p className="lg:text-sm">{data[3].description}</p>
          <Button
            size={"sm"}
            variant={"secondaryWithHoverAnimation"}
            className="rounded-full text-xs"
            className2="rounded-full bg-[#3a53f5]"
            className3="max-w-max"
          >
            <span>Learn More</span>
            <ArrowUpRight className="ml-1" size={18} />
          </Button>
        </div>
      </div>
      <div className="relative col-span-10 flex flex-col items-center justify-center gap-5 rounded-sm border border-black bg-[#fffff8] p-10 md:col-span-6 lg:col-span-3">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-sm border border-black bg-black"></div>
        <div className="space-y-5">
          <h3 className="text-3xl font-medium">{data[4].label}</h3>
          <p>{data[4].description}</p>
          <Button
            size={"sm"}
            variant={"secondaryWithHoverAnimation"}
            className="rounded-full text-xs"
            className2="rounded-full bg-yellow-300 border border-black"
            className3="max-w-max"
          >
            <span>Learn More</span>
            <ArrowUpRight className="ml-1" size={18} />
          </Button>
        </div>
      </div>
      <div className="relative col-span-10 flex flex-col items-center justify-center gap-5 rounded-sm border border-black bg-[#3a53f5] p-10 md:col-span-4 lg:col-span-5">
        <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-sm border border-black bg-black"></div>
        <div className="space-y-5">
          <h3
            style={{ textShadow: "2px 2px 0px rgb(0, 0, 0)" }}
            className="text-3xl font-medium text-white lg:text-5xl"
          >
            {data[5].label}
          </h3>
          <p className="lg:text-lg lg:leading-6">{data[5].description}</p>
          <Button
            size={"sm"}
            variant={"secondaryWithHoverAnimation"}
            className="rounded-full text-xs"
            className2="rounded-full"
            className3="max-w-max"
          >
            <span>Learn More</span>
            <ArrowUpRight className="ml-1" size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NegativeConversationCards;
