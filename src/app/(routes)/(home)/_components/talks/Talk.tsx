import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";

type TalkProps = {
  talk: { title: string; description: string; keyPoints: string[] };
  id: number;
};

const Talk = ({ talk, id }: TalkProps) => {
  return (
    <Link href={"/talks"}>
      <div
        className={cn(
          "relative col-span-1 flex h-full flex-col justify-between rounded-2xl border border-neutral-300/50 bg-white px-5 pb-5 pt-10 shadow-xl shadow-neutral-300/30 transition duration-300 ease-in-out hover:border-blue-600 md:items-center",
          {
            "scale-y-105 border-0 border-neutral-950 bg-gradient-to-b from-[#242325] to-[#171619] pt-[3.25rem] shadow-2xl shadow-neutral-700/50":
              id === 1,
          },
        )}
      >
        {id === 1 && (
          <div className="absolute right-2.5 top-2.5 rounded-full bg-blue-600 px-3 py-1 text-[.75rem] font-bold text-white shadow-lg shadow-black/40">
            Signature Talk
          </div>
        )}
        <div className="flex w-full flex-col items-center gap-6">
          <h4
            className={cn(
              "text-center text-[1.75rem] font-semibold leading-8 text-gray-950",
              {
                "max-w-[18ch] sm:max-w-max lg:max-w-[18ch]": id === 0,
                "text-white": id === 1,
              },
            )}
          >
            {talk.title}
          </h4>
          <div>
            <p
              className={cn(
                "balance-text text-center font-semibold text-gray-950",
                {
                  "text-white": id === 1,
                },
              )}
            >
              {talk.description}
            </p>
            <Button className="mt-5 w-full hover:brightness-125">
              <span>Learn More</span>
              <PiArrowUpRightBold className="ml-2" size={16} />
            </Button>
          </div>
          <div className={`space-y-6 px-10 pt-5 text-gray-950`}>
            {talk.keyPoints.map((point) => (
              <p
                className={cn(
                  "balance-text border-b border-gray-500 pb-5 text-center last:border-b-0",
                  {
                    "border-white/90 text-white": id === 1,
                  },
                )}
                key={point}
              >
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Talk;
