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
      <div className="grid grid-cols-3 gap-2">
        {data.map((thought) => (
          <div
            className={cn(
              "col-span-1 flex items-center justify-center  border border-b-8 border-r-8 border-black bg-[#3a53f5] p-5 text-white",
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
