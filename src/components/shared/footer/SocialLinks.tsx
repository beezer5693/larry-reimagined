import { SOCIAL_LINKS } from "@/constants";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4 text-white">
      <Link
        className="cursor-pointer opacity-80 transition duration-200 ease-in-out hover:opacity-100"
        href={SOCIAL_LINKS[0].href}
      >
        <FaFacebookF size={15} />
      </Link>
      <Link
        className="cursor-pointer opacity-80 transition duration-200 ease-in-out hover:opacity-100"
        href={SOCIAL_LINKS[1].href}
      >
        <FaInstagram size={16} />
      </Link>
      <Link
        className="cursor-pointer opacity-80 transition duration-200 ease-in-out hover:opacity-100"
        href={SOCIAL_LINKS[2].href}
      >
        <FaLinkedinIn size={16} />
      </Link>
      <Link
        className="cursor-pointer opacity-80 transition duration-200 ease-in-out hover:opacity-100"
        href={SOCIAL_LINKS[3].href}
      >
        <FaXTwitter size={16} />
      </Link>
      <Link
        className="cursor-pointer opacity-80 transition duration-200 ease-in-out hover:opacity-100"
        href={SOCIAL_LINKS[4].href}
      >
        <FaYoutube size={16} />
      </Link>
    </div>
  );
};

export default SocialLinks;
