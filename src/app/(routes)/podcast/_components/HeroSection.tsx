import Image from "next/image";
import podcastHeroBg from "../../../../../public/assets/podcast/podcast.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FaSpotify, FaYoutube, FaApple, FaTiktok } from "react-icons/fa";
import RednoteLogo from "../../../../../public/assets/podcast/rednote.jpeg";
import { PODCAST_LINKS } from "@/constants";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center px-5 before:absolute before:inset-0 before:bg-black/10 before:backdrop-blur-sm md:px-20">
      <Image
        src={podcastHeroBg}
        alt="Podcast Hero Background"
        fill
        className="object-cover"
        sizes="100vw"
        quality={65}
        priority
      />
      <div className="relative w-full max-w-screen-2xl text-white xl:pl-0">
        <h1 className="font-semibold">
          <span className="block text-8xl tracking-tighter text-blue-600">
            The Life Lab
          </span>
          <span className="mt-1 block text-2xl">with Larry Bryan</span>
        </h1>
        <p className="mt-6 text-xl font-medium">
          A podcast curating the formulas for success in life and business.
        </p>
        <div className="mt-8 grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-3 md:flex-row">
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
