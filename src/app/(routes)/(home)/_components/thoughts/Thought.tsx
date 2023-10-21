import { cn } from "@/lib/utils";

type CardProps = {
  data: {
    thought: string;
    description: string;
  };
  id: number;
};

const Thought = ({ data, id }: CardProps) => {
  return (
    <div
      className={cn(
        "relative col-span-1 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#3a53f5] to-[#2e42c4] p-5 text-white shadow-xl shadow-[#3a53f5]/40 ",
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
