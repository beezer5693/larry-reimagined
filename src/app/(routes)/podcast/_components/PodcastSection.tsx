import { Button } from "@/components/ui/Button";
import Link from "next/link";

const PodcastSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 bg-white px-5 py-20 md:px-10">
      <h2 className="text-balance text-center text-5xl font-semibold tracking-tight text-gray-950 md:text-7xl">
        Interested in being on the podcast?
      </h2>
      <Link
        className="w-full max-w-[400px]"
        href={"mailto:larry@larrybryanlive.com?subject=Podcast%20Inquiry"}
      >
        <Button className="w-full py-6 text-2xl">Contact Me</Button>
      </Link>
    </section>
  );
};

export default PodcastSection;
