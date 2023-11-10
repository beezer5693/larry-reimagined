import Talk from "./Talk";

type TalksProps = {
  talks: {
    title: string;
    description: string;
    keyPoints: string[];
    path: string;
  }[];
};

const Talks = ({ talks }: TalksProps) => {
  return (
    <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-5">
      {talks.map((talk, i) => (
        <Talk key={talk.title} id={i} talk={talk} />
      ))}
    </div>
  );
};

export default Talks;
