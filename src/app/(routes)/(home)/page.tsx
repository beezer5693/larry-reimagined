import Hero from "./_components/Hero";
import LimitingThoughts from "./_components/LimitingThoughts";
import Mindset from "./_components/Mindset";
import Keys from "./_components/Keys";
import Talks from "./_components/Talks";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center overflow-hidden">
      <div className="flex h-full w-full flex-col items-center">
        <Hero />
        <LimitingThoughts />
        <Mindset />
        <Keys />
        <Talks />
      </div>
    </main>
  );
}
