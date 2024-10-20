import AnimateElement from "@/components/shared/animation/AnimateElement";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";

type TalkProps = {
  talk: {
    title: string;
    description: string;
    keyPoints: string[];
    path: string;
  };
  id: number;
};

const Talk = ({ talk, id }: TalkProps) => {
  return (
    <AnimateElement y={75} duration={0.75}>
      <Link href={talk.path}>
        <div
          className={cn(
            "relative col-span-1 flex h-full flex-col justify-between rounded-md border border-neutral-300/50 bg-white px-5 pb-5 pt-[4.5rem] shadow-2xl shadow-neutral-300/30 transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-neutral-400/70 md:items-center",
            {
              "border-0 border-neutral-950 bg-gradient-to-b from-[#242325] to-[#171619] shadow-2xl shadow-neutral-700/40 hover:shadow-neutral-900/60":
                id === 1,
            },
          )}
        >
          <div
            className={cn(
              "absolute left-1/2 top-4 w-full max-w-max -translate-x-1/2 rounded-full border border-blue-600 px-3 py-1 text-sm font-medium text-blue-600",
              {
                "bg-blue-600 text-white shadow-md shadow-black/40": id === 1,
              },
            )}
          >
            {id === 0
              ? "Talk For Sales People"
              : id === 1
              ? "Talk For Everyone"
              : "Talk For Entrepreneurial Leadership"}
          </div>

          <div className="flex w-full flex-col items-center gap-6">
            <h4
              className={cn(
                "text-center text-4xl font-semibold leading-8 text-gray-950",
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
              <div className="px-5">
                <Button className="mt-5 w-full hover:brightness-110">
                  <span>Learn More</span>
                  <PiArrowUpRightBold className="ml-2" size={16} />
                </Button>
              </div>
            </div>
            <div className={`space-y-6 px-10 pt-5 text-gray-800`}>
              {talk.keyPoints.map((point) => (
                <p
                  className={cn(
                    "balance-text border-b border-gray-500 pb-5 text-center last:border-b-0",
                    {
                      "border-white/90 text-gray-50": id === 1,
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
    </AnimateElement>
  );
};

export default Talk;
