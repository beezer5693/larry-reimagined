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
          "relative col-span-1 flex h-full flex-col gap-5 rounded-2xl border border-neutral-200/50 p-8 shadow-xl shadow-neutral-300/50",
        )}
        key={data.thought}
      >
        <h4 className="text-xl font-bold text-gray-950 lg:text-2xl">
          {data.thought}
        </h4>
        <p className="font-medium text-gray-800">{data.description}</p>
      </div>
    </AnimateElement>
  );
};

export default Thought;
