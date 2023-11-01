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
        "relative col-span-1 flex items-center justify-center rounded-lg bg-blue-600 px-10 py-10 text-white shadow-xl shadow-blue-600/40 md:py-14 lg:py-20",
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
