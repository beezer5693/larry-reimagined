import Thought from "./Thought";

type ThoughtProps = {
  data: {
    thought: string;
    description: string;
  }[];
};

const Thoughts = ({ data }: ThoughtProps) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="relative flex flex-1 self-stretch">
        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-7">
          {data.map((thought, i) => (
            <Thought key={i} index={i} data={thought} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thoughts;
