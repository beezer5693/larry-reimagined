import Thought from "./Thought";

type ThoughtProps = {
  data: {
    thought: string;
    description: string;
  }[];
};

const Thoughts = ({ data }: ThoughtProps) => {
  return (
    <div className="mx-auto w-full max-w-screen-lg">
      <div className="relative flex flex-1 self-stretch">
        <div className="grid w-full grid-cols-3 gap-3">
          {data.map((thought, i) => (
            <Thought key={i} data={thought} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thoughts;
