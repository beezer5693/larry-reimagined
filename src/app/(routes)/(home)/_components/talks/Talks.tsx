import Talk from "./Talk";

type TalksProps = {
  talks: {
    title: string;
    description: string;
    keyPoints: string[];
  }[];
};

const Talks = ({ talks }: TalksProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {talks.map((talk, i) => (
        <Talk key={talk.title} id={i} talk={talk} />
      ))}
    </div>
  );
};

export default Talks;
