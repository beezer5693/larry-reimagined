import { cn } from "@/lib/utils";

type CardProps = {
  data: {
    thought: string;
    description: string;
  }[];
};

const ThoughtCards = ({ data }: CardProps) => {
  return (
    <div className="relative flex w-full flex-1 self-stretch">
      <div className="grid grid-cols-3 gap-3">
        {data.map((thought) => (
          <div
            className={cn(
              "relative col-span-1 flex items-center justify-center bg-gradient-to-br from-[#3a53f5] to-[#2e42c4] p-5 text-white shadow-xl shadow-[#3a53f5]/40 ",
            )}
            key={thought.thought}
          >
            <p className="text-center text-xs font-bold sm:text-base md:text-lg lg:text-2xl">
              {thought.thought}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThoughtCards;
