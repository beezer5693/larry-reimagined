import Thought from "./Thought";

type ThoughtProps = {
  data: {
    thought: string;
    description: string;
  }[];
};

const Thoughts = ({ data }: ThoughtProps) => {
  return (
    <div className="relative flex w-full flex-1 self-stretch">
      <div className="grid grid-cols-3 gap-3">
        {data.map((thought, i) => (
          <Thought key={i} id={i} data={thought} />
        ))}
      </div>
    </div>
  );
};

export default Thoughts;
