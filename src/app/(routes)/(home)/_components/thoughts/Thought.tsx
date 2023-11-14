import AnimateElement from "@/components/shared/animation/AnimateElement";
import { cn } from "@/lib/utils";

type CardProps = {
  data: {
    thought: string;
    description: string;
  };
  index: number;
};

const Thought = ({ data, index }: CardProps) => {
  return (
    <AnimateElement y={75} duration={0.75} delay={0.1 * index}>
      <div
        className={cn(
          "relative col-span-1 flex h-full flex-col items-center gap-5 rounded-md border border-neutral-300/50 bg-white p-8 shadow-2xl shadow-gray-400/70",
        )}
        key={data.thought}
      >
        <h4 className="text-center text-xl font-bold text-gray-950 lg:text-2xl">
          {data.thought}
        </h4>
        <p className="balance-text text-center font-medium text-gray-800">
          {data.description}
        </p>
      </div>
    </AnimateElement>
  );
};

export default Thought;
