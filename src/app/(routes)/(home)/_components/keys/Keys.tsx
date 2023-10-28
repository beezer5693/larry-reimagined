import { StaticImageData } from "next/image";
import Key from "./Key";

type KeyProps = {
  keys: {
    title: string;
    description: string;
    imageSrc: StaticImageData;
    style: string;
  }[];
};

const Keys = ({ keys }: KeyProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
      {keys.map((key, i) => (
        <Key key={key.title} id={i} data={key} />
      ))}
    </div>
  );
};

export default Keys;
