import { cn } from "@/lib/utils";

type CardProps = {
  data: {
    thought: string;
    description: string;
  };
};

const Thought = ({ data }: CardProps) => {
  return (
    <div
      className={cn(
        "relative col-span-1 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#3a53f5] to-[#2e42c4] px-10 py-10 text-white shadow-xl shadow-[#3a53f5]/40 md:py-14 lg:py-20",
      )}
      key={data.thought}
    >
      <p className="text-center text-xs font-bold sm:text-base md:text-lg lg:text-2xl">
        {data.thought}
      </p>
    </div>
  );
};

export default Thought;
