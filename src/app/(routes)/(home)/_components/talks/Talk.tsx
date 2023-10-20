import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type TalkProps = {
  talk: { title: string; description: string; keyPoints: string[] };
  id: number;
};

const Talk = ({ talk, id }: TalkProps) => {
  return (
    <div className="col-span-1 flex flex-col justify-between self-start rounded-lg bg-white px-5 pb-5 pt-10 shadow-xl shadow-neutral-300/40 md:items-center">
      <div className="flex w-full flex-col items-center gap-6">
        <h4
          className={cn("text-center text-[1.75rem] font-bold leading-8", {
            "max-w-[18ch] sm:max-w-max lg:max-w-[18ch]": id === 0,
          })}
        >
          {talk.title}
        </h4>
        <p className="text-center font-semibold">{talk.description}</p>

        <div className={`w-full space-y-6 px-10 pt-5 text-black`}>
          {talk.keyPoints.map((point) => (
            <p
              className="border-b border-[#3a53f5] pb-2 text-center"
              key={point}
            >
              {point}
            </p>
          ))}
        </div>
      </div>
      <Link className="mt-10 w-full" href={"/talks"}>
        <Button className="w-full hover:brightness-125">
          <span>Learn More</span>
          <ArrowUpRight className="ml-2" size={16} />
        </Button>
      </Link>
    </div>
  );
};

export default Talk;
