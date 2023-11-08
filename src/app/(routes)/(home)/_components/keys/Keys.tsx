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
    <div className="mx-auto grid grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-5 lg:gap-5">
      {keys.map((key, i) => (
        <Key key={key.title} id={i} data={key} />
      ))}
    </div>
  );
};

export default Keys;
