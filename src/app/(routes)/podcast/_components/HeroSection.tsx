import Image from "next/image";
import podcastHeroBg from "../../../../../public/assets/podcast/podcast.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaSpotify, FaYoutube, FaApple, FaTiktok } from "react-icons/fa";
import RednoteLogo from "../../../../../public/assets/podcast/rednote.jpeg";
import { PODCAST_LINKS } from "@/constants";

const HeroSection = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center px-5 pb-14 pt-10 before:absolute before:inset-0 before:bg-black/10 before:backdrop-blur-sm md:px-20 lg:h-screen lg:py-0 lg:pb-20 lg:pt-12">
      <Image
        src={podcastHeroBg}
        alt="Podcast Hero Background"
        fill
        className="object-cover"
        quality={65}
        priority
      />
      <div className="relative w-full max-w-screen-2xl text-white xl:pl-0">
        <h1 className="font-semibold">
          <span className="block text-8xl tracking-tighter text-blue-600">
            Larry Bryan Live
          </span>
        </h1>
        <div className="mt-12 max-w-[750px] space-y-4 text-xl font-medium">
          <p>
            {`I’m Larry Bryan, 70 years old and thriving, with a $52 million
          insurance commission legacy. Welcome to Larry Bryan Live, where I dive
          into 5-minute fire interviews with 20-something millionaires crushing
          it in AI, crypto, branding, and scaling. Every Friday, it’s a
          70-year-old hustle vs. a Gen-Z genius, bridging the gap to bring you
          raw insights, great suggestions, and real moves.`}
          </p>
          <p>
            {`Expect no fluff, just
          actionable strategies, diverse perspectives, and mindset shifts to
          fast-track your wealth. Whether you’re 25 or 55, I’m here to connect
          the old-school grind with young-world innovation. Subscribe now, and
          let’s stack the bag together. Larry Bryan Live, 70, and thriving!`}
          </p>
        </div>
        <div className="mt-8 grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-3">
          <Link
            target="_blank"
            className="col-span-1"
            href={PODCAST_LINKS.spotify.href}
          >
            <Button className="flex h-11 w-full gap-1.5">
              <FaSpotify className="h-5 w-5" />
              <span>{PODCAST_LINKS.spotify.label}</span>
            </Button>
          </Link>
          <Link
            target="_blank"
            className="col-span-1"
            href={PODCAST_LINKS.apple.href}
          >
            <Button className="flex h-11 w-full gap-1.5">
              <FaApple className="h-5 w-5" />
              <span>{PODCAST_LINKS.apple.label}</span>
            </Button>
          </Link>
          <Link
            target="_blank"
            className="col-span-1"
            href={PODCAST_LINKS.youtube.href}
          >
            <Button className="flex h-11 w-full gap-1.5">
              <FaYoutube className="h-5 w-5" />
              <span>{PODCAST_LINKS.youtube.label}</span>
            </Button>
          </Link>
          <Link
            target="_blank"
            className="col-span-1"
            href={PODCAST_LINKS.douyin.href}
          >
            <Button className="flex h-11 w-full gap-1.5">
              <FaTiktok className="h-5 w-5" />
              <span>{PODCAST_LINKS.douyin.label}</span>
            </Button>
          </Link>
          <Link
            target="_blank"
            className="col-span-1"
            href={PODCAST_LINKS.rednote.href}
          >
            <Button className="flex h-11 w-full gap-1.5">
              <Image
                src={RednoteLogo}
                className="h-4 w-auto text-white"
                alt="Rednote Logo"
              />
              <span>{PODCAST_LINKS.rednote.label}</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
