import { Button } from "@/components/ui/Button";
import Link from "next/link";

const PodcastSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 bg-white px-5 py-20 lg:px-20">
      <h2 className="text-center text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl lg:text-balance">
        Do you want to be on the podcast, or do you have a question or topic you
        want me to cover?
      </h2>
      <Link
        className="w-full md:max-w-[500px] lg:max-w-[300px]"
        href={"mailto:larry@larrybryanlive.com?subject=Podcast%20Inquiry"}
      >
        <Button className="w-full md:py-3 md:text-xl">Contact Me</Button>
      </Link>
    </section>
  );
};

export default PodcastSection;
