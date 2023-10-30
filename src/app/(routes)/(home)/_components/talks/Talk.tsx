import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";

type TalkProps = {
  talk: { title: string; description: string; keyPoints: string[] };
  id: number;
};

const Talk = ({ talk, id }: TalkProps) => {
  return (
    <div className="col-span-1 flex flex-col justify-between rounded-lg bg-white px-5 pb-5 pt-10 md:items-center">
      <div className="flex w-full flex-col items-center gap-6">
        <h4
          className={cn("text-center text-[1.75rem] font-semibold leading-8", {
            "max-w-[18ch] sm:max-w-max lg:max-w-[18ch]": id === 0,
          })}
        >
          {talk.title}
        </h4>
        <p className="max-w-[35ch] text-center font-semibold text-gray-950">
          {talk.description}
        </p>
        <div className={`space-y-6 px-10 pt-5 text-gray-950`}>
          {talk.keyPoints.map((point) => (
            <p
              className="border-b border-gray-950 pb-5 text-center"
              key={point}
            >
              {point}
            </p>
          ))}
        </div>
      </div>
      <Link className="mt-14 w-full" href={"/talks"}>
        <Button className="w-full text-white hover:brightness-125">
          <span>Learn More</span>
          <PiArrowUpRightBold className="ml-2" size={16} />
        </Button>
      </Link>
    </div>
  );
};

export default Talk;
